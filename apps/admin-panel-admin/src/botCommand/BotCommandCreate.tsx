import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BotCommandCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="commandName" source="commandName" />
      </SimpleForm>
    </Create>
  );
};
