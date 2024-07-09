import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AnalyticsDataListRelationFilter } from "../analyticsData/AnalyticsDataListRelationFilter";

export type ReportWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  createdDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  analyticsDataItems?: AnalyticsDataListRelationFilter;
};
