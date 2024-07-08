import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  transactionDate?: SortOrder;
  status?: SortOrder;
  paymentId?: SortOrder;
};
