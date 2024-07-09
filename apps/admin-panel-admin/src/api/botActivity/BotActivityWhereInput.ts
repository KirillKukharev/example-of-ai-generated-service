import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BotActivityWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  activityType?: "Option1";
  details?: StringNullableFilter;
  userId?: IntNullableFilter;
};
