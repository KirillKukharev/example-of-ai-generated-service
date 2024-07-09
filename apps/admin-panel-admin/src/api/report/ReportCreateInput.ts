import { AnalyticsDataCreateNestedManyWithoutReportsInput } from "./AnalyticsDataCreateNestedManyWithoutReportsInput";

export type ReportCreateInput = {
  description?: string | null;
  createdDate?: Date | null;
  title?: string | null;
  analyticsDataItems?: AnalyticsDataCreateNestedManyWithoutReportsInput;
};
