import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AwsDataWhereInput = {
  backupName?: StringNullableFilter;
  id?: StringFilter;
  lastModifiedTime?: DateTimeNullableFilter;
  lastRunTime?: DateTimeNullableFilter;
};
