import { Injectable } from "@nestjs/common";
import { AwsDataDto } from "../awsDataModule/AwsDataDto";

@Injectable()
export class AwsDataModuleService {
  constructor() {}
  async ManageAwsData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ManageAwsDataAction(args: AwsDataDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
