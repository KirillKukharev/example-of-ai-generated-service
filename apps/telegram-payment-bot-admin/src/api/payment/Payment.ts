import { User } from "../user/User";
import { Transaction } from "../transaction/Transaction";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  currency: string | null;
  paymentStatus?: "Option1" | null;
  amount: number | null;
  user?: User | null;
  transactions?: Array<Transaction>;
};
