import { AwsDataWhereInput } from "./AwsDataWhereInput";
import { AwsDataOrderByInput } from "./AwsDataOrderByInput";

export type AwsDataFindManyArgs = {
  where?: AwsDataWhereInput;
  orderBy?: Array<AwsDataOrderByInput>;
  skip?: number;
  take?: number;
};
