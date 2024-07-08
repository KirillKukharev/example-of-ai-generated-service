import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TransactionUpdateManyWithoutPaymentsInput } from "./TransactionUpdateManyWithoutPaymentsInput";

export type PaymentUpdateInput = {
  currency?: string | null;
  paymentStatus?: "Option1" | null;
  amount?: number | null;
  user?: UserWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutPaymentsInput;
};
