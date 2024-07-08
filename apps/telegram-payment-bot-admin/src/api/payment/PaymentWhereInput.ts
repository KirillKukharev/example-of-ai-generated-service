import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type PaymentWhereInput = {
  id?: StringFilter;
  currency?: StringNullableFilter;
  paymentStatus?: "Option1";
  amount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
  transactions?: TransactionListRelationFilter;
};
