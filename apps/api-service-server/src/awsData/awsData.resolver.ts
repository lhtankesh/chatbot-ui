import * as graphql from "@nestjs/graphql";
import { AwsDataResolverBase } from "./base/awsData.resolver.base";
import { AwsData } from "./base/AwsData";
import { AwsDataService } from "./awsData.service";

@graphql.Resolver(() => AwsData)
export class AwsDataResolver extends AwsDataResolverBase {
  constructor(protected readonly service: AwsDataService) {
    super(service);
  }
}
