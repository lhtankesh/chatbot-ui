import { SortOrder } from "../../util/SortOrder";

export type AwsDataOrderByInput = {
  backupName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lastModifiedTime?: SortOrder;
  lastRunTime?: SortOrder;
  updatedAt?: SortOrder;
};
