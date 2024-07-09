import { SortOrder } from "../../util/SortOrder";

export type BotCommandOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  createdBy?: SortOrder;
  commandName?: SortOrder;
};
