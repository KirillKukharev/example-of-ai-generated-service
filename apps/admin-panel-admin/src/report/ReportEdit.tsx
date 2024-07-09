import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AnalyticsDataTitle } from "../analyticsData/AnalyticsDataTitle";

export const ReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="createdDate" source="createdDate" />
        <TextInput label="title" source="title" />
        <ReferenceArrayInput
          source="analyticsDataItems"
          reference="AnalyticsData"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnalyticsDataTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
