import { SortOrder } from "../../util/SortOrder";

export type AnalyticsDataOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  metricName?: SortOrder;
  metricValue?: SortOrder;
  recordedAt?: SortOrder;
  reportId?: SortOrder;
};
