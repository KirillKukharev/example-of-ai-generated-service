import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";

export const AnalyticsDataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AnalyticsDataItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="metricName" source="metricName" />
        <TextField label="metricValue" source="metricValue" />
        <TextField label="recordedAt" source="recordedAt" />
        <ReferenceField label="Report" source="report.id" reference="Report">
          <TextField source={REPORT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
