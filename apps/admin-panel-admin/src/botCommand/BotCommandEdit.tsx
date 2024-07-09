import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BotCommandEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="commandName" source="commandName" />
      </SimpleForm>
    </Edit>
  );
};
