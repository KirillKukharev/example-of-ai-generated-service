import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ReportTitle } from "../report/ReportTitle";

export const AnalyticsDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="metricName" source="metricName" />
        <NumberInput label="metricValue" source="metricValue" />
        <DateTimeInput label="recordedAt" source="recordedAt" />
        <ReferenceInput source="report.id" reference="Report" label="Report">
          <SelectInput optionText={ReportTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
