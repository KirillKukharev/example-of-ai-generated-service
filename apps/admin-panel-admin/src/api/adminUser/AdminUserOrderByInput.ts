import { SortOrder } from "../../util/SortOrder";

export type AdminUserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  active?: SortOrder;
  username?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  role?: SortOrder;
};
