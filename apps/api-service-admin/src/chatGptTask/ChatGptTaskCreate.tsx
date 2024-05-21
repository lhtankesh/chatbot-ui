import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ChatGptTaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="MaxTokens" source="maxTokens" />
        <TextInput label="Model" source="model" />
        <TextInput label="Prompt" multiline source="prompt" />
      </SimpleForm>
    </Create>
  );
};
