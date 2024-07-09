import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const AdminUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <TextInput label="username" source="username" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="password" source="password" />
        <SelectInput
          source="role"
          label="role"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
