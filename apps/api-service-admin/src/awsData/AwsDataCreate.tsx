import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AwsDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="BackupName" source="backupName" />
        <DateTimeInput label="LastModifiedTime" source="lastModifiedTime" />
        <DateTimeInput label="LastRunTime" source="lastRunTime" />
      </SimpleForm>
    </Create>
  );
};
