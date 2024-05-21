import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AwsDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="BackupName" source="backupName" />
        <DateTimeInput label="LastModifiedTime" source="lastModifiedTime" />
        <DateTimeInput label="LastRunTime" source="lastRunTime" />
      </SimpleForm>
    </Edit>
  );
};
