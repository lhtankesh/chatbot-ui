import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AwsDataService } from "./awsData.service";
import { AwsDataControllerBase } from "./base/awsData.controller.base";

@swagger.ApiTags("awsData")
@common.Controller("awsData")
export class AwsDataController extends AwsDataControllerBase {
  constructor(protected readonly service: AwsDataService) {
    super(service);
  }
}
