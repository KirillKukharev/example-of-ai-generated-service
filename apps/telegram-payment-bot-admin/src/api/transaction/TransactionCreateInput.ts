import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type TransactionCreateInput = {
  transactionDate?: Date | null;
  status?: "Option1" | null;
  payment?: PaymentWhereUniqueInput | null;
};
