import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AdminUserWhereInput = {
  id?: StringFilter;
  active?: BooleanNullableFilter;
  username?: StringNullableFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
  role?: "Option1";
};
