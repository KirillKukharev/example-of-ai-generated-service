import { AnalyticsData } from "../analyticsData/AnalyticsData";

export type Report = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  createdDate: Date | null;
  title: string | null;
  analyticsDataItems?: Array<AnalyticsData>;
};
