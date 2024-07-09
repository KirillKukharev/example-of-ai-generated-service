import { SortOrder } from "../../util/SortOrder";

export type BotActivityOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  timestamp?: SortOrder;
  activityType?: SortOrder;
  details?: SortOrder;
  userId?: SortOrder;
};
