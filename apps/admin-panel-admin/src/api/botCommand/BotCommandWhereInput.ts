import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BotCommandWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  commandName?: StringNullableFilter;
};
