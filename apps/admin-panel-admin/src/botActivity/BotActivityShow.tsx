import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BotActivityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="timestamp" source="timestamp" />
        <TextField label="activityType" source="activityType" />
        <TextField label="details" source="details" />
        <TextField label="userId" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
