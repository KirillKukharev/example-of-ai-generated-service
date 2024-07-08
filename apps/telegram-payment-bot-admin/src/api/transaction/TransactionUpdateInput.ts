import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type TransactionUpdateInput = {
  transactionDate?: Date | null;
  status?: "Option1" | null;
  payment?: PaymentWhereUniqueInput | null;
};
