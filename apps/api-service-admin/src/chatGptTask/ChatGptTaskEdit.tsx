import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ChatGptTaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="MaxTokens" source="maxTokens" />
        <TextInput label="Model" source="model" />
        <TextInput label="Prompt" multiline source="prompt" />
      </SimpleForm>
    </Edit>
  );
};
