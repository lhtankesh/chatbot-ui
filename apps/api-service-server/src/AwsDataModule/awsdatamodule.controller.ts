import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AwsDataModuleService } from "./awsdatamodule.service";
import { AwsDataDto } from "../awsDataModule/AwsDataDto";

@swagger.ApiTags("awsDataModules")
@common.Controller("awsDataModules")
export class AwsDataModuleController {
  constructor(protected readonly service: AwsDataModuleService) {}

  @common.Get("/:id/manage-aws-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ManageAwsData(
    @common.Body()
    body: AwsDataDto
  ): Promise<string> {
        return this.service.ManageAwsData(body);
      }

  @common.Post("/manage-aws-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ManageAwsDataAction(
    @common.Body()
    body: AwsDataDto
  ): Promise<string> {
        return this.service.ManageAwsDataAction(body);
      }
}
