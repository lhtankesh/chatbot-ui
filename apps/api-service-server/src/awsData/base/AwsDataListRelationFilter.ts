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
import { AwsDataWhereInput } from "./AwsDataWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AwsDataListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AwsDataWhereInput,
  })
  @ValidateNested()
  @Type(() => AwsDataWhereInput)
  @IsOptional()
  @Field(() => AwsDataWhereInput, {
    nullable: true,
  })
  every?: AwsDataWhereInput;

  @ApiProperty({
    required: false,
    type: () => AwsDataWhereInput,
  })
  @ValidateNested()
  @Type(() => AwsDataWhereInput)
  @IsOptional()
  @Field(() => AwsDataWhereInput, {
    nullable: true,
  })
  some?: AwsDataWhereInput;

  @ApiProperty({
    required: false,
    type: () => AwsDataWhereInput,
  })
  @ValidateNested()
  @Type(() => AwsDataWhereInput)
  @IsOptional()
  @Field(() => AwsDataWhereInput, {
    nullable: true,
  })
  none?: AwsDataWhereInput;
}
export { AwsDataListRelationFilter as AwsDataListRelationFilter };
