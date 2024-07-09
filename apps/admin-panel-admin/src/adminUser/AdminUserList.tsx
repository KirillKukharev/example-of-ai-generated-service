import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AdminUserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AdminUsers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="active" source="active" />
        <TextField label="username" source="username" />
        <TextField label="email" source="email" />
        <TextField label="password" source="password" />
        <TextField label="role" source="role" />
      </Datagrid>
    </List>
  );
};
