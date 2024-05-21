import * as graphql from "@nestjs/graphql";
import { AwsDataDto } from "../awsDataModule/AwsDataDto";
import { AwsDataModuleService } from "./awsdatamodule.service";

export class AwsDataModuleResolver {
  constructor(protected readonly service: AwsDataModuleService) {}

  @graphql.Query(() => String)
  async ManageAwsData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ManageAwsData(args);
  }

  @graphql.Mutation(() => String)
  async ManageAwsDataAction(
    @graphql.Args()
    args: AwsDataDto
  ): Promise<string> {
    return this.service.ManageAwsDataAction(args);
  }
}
