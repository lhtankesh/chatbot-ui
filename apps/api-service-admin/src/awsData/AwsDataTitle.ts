import { AwsData as TAwsData } from "../api/awsData/AwsData";

export const AWSDATA_TITLE_FIELD = "backupName";

export const AwsDataTitle = (record: TAwsData): string => {
  return record.backupName?.toString() || String(record.id);
};
