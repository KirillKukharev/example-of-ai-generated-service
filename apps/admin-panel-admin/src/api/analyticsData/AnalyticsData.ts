import { Report } from "../report/Report";

export type AnalyticsData = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  metricName: string | null;
  metricValue: number | null;
  recordedAt: Date | null;
  report?: Report | null;
};
