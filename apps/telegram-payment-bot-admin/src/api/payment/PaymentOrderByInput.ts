import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  currency?: SortOrder;
  paymentStatus?: SortOrder;
  amount?: SortOrder;
  userId?: SortOrder;
};
