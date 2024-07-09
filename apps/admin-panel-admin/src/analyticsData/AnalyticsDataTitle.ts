import { AnalyticsData as TAnalyticsData } from "../api/analyticsData/AnalyticsData";

export const ANALYTICSDATA_TITLE_FIELD = "metricName";

export const AnalyticsDataTitle = (record: TAnalyticsData): string => {
  return record.metricName?.toString() || String(record.id);
};
