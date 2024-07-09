import { AnalyticsDataUpdateManyWithoutReportsInput } from "./AnalyticsDataUpdateManyWithoutReportsInput";

export type ReportUpdateInput = {
  description?: string | null;
  createdDate?: Date | null;
  title?: string | null;
  analyticsDataItems?: AnalyticsDataUpdateManyWithoutReportsInput;
};
