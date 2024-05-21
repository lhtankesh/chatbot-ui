import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const KnowledgeBaseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="KnowledgeBaseId" source="knowledgeBaseId" />
        <NumberInput step={1} label="MaxSize" source="maxSize" />
        <TextInput label="Query" source="query" />
      </SimpleForm>
    </Edit>
  );
};
