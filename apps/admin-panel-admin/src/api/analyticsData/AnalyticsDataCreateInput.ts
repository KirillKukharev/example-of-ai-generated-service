import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";

export type AnalyticsDataCreateInput = {
  metricName?: string | null;
  metricValue?: number | null;
  recordedAt?: Date | null;
  report?: ReportWhereUniqueInput | null;
};
