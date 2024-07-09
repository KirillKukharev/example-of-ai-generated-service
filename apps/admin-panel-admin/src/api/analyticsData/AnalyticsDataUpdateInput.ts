import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";

export type AnalyticsDataUpdateInput = {
  metricName?: string | null;
  metricValue?: number | null;
  recordedAt?: Date | null;
  report?: ReportWhereUniqueInput | null;
};
