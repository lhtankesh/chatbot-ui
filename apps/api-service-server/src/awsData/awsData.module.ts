import { Module } from "@nestjs/common";
import { AwsDataModuleBase } from "./base/awsData.module.base";
import { AwsDataService } from "./awsData.service";
import { AwsDataController } from "./awsData.controller";
import { AwsDataResolver } from "./awsData.resolver";

@Module({
  imports: [AwsDataModuleBase],
  controllers: [AwsDataController],
  providers: [AwsDataService, AwsDataResolver],
  exports: [AwsDataService],
})
export class AwsDataModule {}
