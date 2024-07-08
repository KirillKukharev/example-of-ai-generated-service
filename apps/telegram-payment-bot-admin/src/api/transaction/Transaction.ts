import { Payment } from "../payment/Payment";

export type Transaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  transactionDate: Date | null;
  status?: "Option1" | null;
  payment?: Payment | null;
};
