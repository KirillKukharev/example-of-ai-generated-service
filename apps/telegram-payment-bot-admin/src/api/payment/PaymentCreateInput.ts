import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TransactionCreateNestedManyWithoutPaymentsInput } from "./TransactionCreateNestedManyWithoutPaymentsInput";

export type PaymentCreateInput = {
  currency?: string | null;
  paymentStatus?: "Option1" | null;
  amount?: number | null;
  user?: UserWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutPaymentsInput;
};
