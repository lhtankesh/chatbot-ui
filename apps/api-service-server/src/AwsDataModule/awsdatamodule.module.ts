import { Module } from "@nestjs/common";
import { AwsDataModuleService } from "./awsdatamodule.service";
import { AwsDataModuleController } from "./awsdatamodule.controller";
import { AwsDataModuleResolver } from "./awsdatamodule.resolver";

@Module({
  controllers: [AwsDataModuleController],
  providers: [AwsDataModuleService, AwsDataModuleResolver],
  exports: [AwsDataModuleService],
})
export class AwsDataModuleModule {}
