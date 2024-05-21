import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AwsDataController } from "../awsData.controller";
import { AwsDataService } from "../awsData.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  backupName: "exampleBackupName",
  createdAt: new Date(),
  id: "exampleId",
  lastModifiedTime: new Date(),
  lastRunTime: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  backupName: "exampleBackupName",
  createdAt: new Date(),
  id: "exampleId",
  lastModifiedTime: new Date(),
  lastRunTime: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    backupName: "exampleBackupName",
    createdAt: new Date(),
    id: "exampleId",
    lastModifiedTime: new Date(),
    lastRunTime: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  backupName: "exampleBackupName",
  createdAt: new Date(),
  id: "exampleId",
  lastModifiedTime: new Date(),
  lastRunTime: new Date(),
  updatedAt: new Date(),
};

const service = {
  createAwsData() {
    return CREATE_RESULT;
  },
  awsDataItems: () => FIND_MANY_RESULT,
  awsData: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("AwsData", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AwsDataService,
          useValue: service,
        },
      ],
      controllers: [AwsDataController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /awsData", async () => {
    await request(app.getHttpServer())
      .post("/awsData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastModifiedTime: CREATE_RESULT.lastModifiedTime.toISOString(),
        lastRunTime: CREATE_RESULT.lastRunTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /awsData", async () => {
    await request(app.getHttpServer())
      .get("/awsData")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          lastModifiedTime: FIND_MANY_RESULT[0].lastModifiedTime.toISOString(),
          lastRunTime: FIND_MANY_RESULT[0].lastRunTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /awsData/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/awsData"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /awsData/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/awsData"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        lastModifiedTime: FIND_ONE_RESULT.lastModifiedTime.toISOString(),
        lastRunTime: FIND_ONE_RESULT.lastRunTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /awsData existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/awsData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastModifiedTime: CREATE_RESULT.lastModifiedTime.toISOString(),
        lastRunTime: CREATE_RESULT.lastRunTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/awsData")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
