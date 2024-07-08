import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type TransactionWhereInput = {
  id?: StringFilter;
  transactionDate?: DateTimeNullableFilter;
  status?: "Option1";
  payment?: PaymentWhereUniqueInput;
};
