import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const AdminUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="active" source="active" />
        <TextField label="username" source="username" />
        <TextField label="email" source="email" />
        <TextField label="password" source="password" />
        <TextField label="role" source="role" />
      </SimpleShowLayout>
    </Show>
  );
};
