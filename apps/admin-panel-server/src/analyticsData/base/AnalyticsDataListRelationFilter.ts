/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnalyticsDataWhereInput } from "./AnalyticsDataWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AnalyticsDataListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AnalyticsDataWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalyticsDataWhereInput)
  @IsOptional()
  @Field(() => AnalyticsDataWhereInput, {
    nullable: true,
  })
  every?: AnalyticsDataWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalyticsDataWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalyticsDataWhereInput)
  @IsOptional()
  @Field(() => AnalyticsDataWhereInput, {
    nullable: true,
  })
  some?: AnalyticsDataWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalyticsDataWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalyticsDataWhereInput)
  @IsOptional()
  @Field(() => AnalyticsDataWhereInput, {
    nullable: true,
  })
  none?: AnalyticsDataWhereInput;
}
export { AnalyticsDataListRelationFilter as AnalyticsDataListRelationFilter };
