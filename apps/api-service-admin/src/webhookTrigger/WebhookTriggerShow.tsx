import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const WebhookTriggerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Method" source="method" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="URL" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
