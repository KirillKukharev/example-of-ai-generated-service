import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";

export type AnalyticsDataWhereInput = {
  id?: StringFilter;
  metricName?: StringNullableFilter;
  metricValue?: FloatNullableFilter;
  recordedAt?: DateTimeNullableFilter;
  report?: ReportWhereUniqueInput;
};
