import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AwsDataServiceBase } from "./base/awsData.service.base";

@Injectable()
export class AwsDataService extends AwsDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
