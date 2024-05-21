import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const KnowledgeBaseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="KnowledgeBaseId" source="knowledgeBaseId" />
        <NumberInput step={1} label="MaxSize" source="maxSize" />
        <TextInput label="Query" source="query" />
      </SimpleForm>
    </Create>
  );
};
