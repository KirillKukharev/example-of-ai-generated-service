import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ReportTitle } from "../report/ReportTitle";

export const AnalyticsDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="metricName" source="metricName" />
        <NumberInput label="metricValue" source="metricValue" />
        <DateTimeInput label="recordedAt" source="recordedAt" />
        <ReferenceInput source="report.id" reference="Report" label="Report">
          <SelectInput optionText={ReportTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
