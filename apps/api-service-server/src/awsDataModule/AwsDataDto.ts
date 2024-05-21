import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class AwsDataDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    backupName!: string;

    @Field(() => Date)
    @Type(() => Date)
    lastRunTime!: Date;

    @Field(() => Date)
    @Type(() => Date)
    lastModifiedTime!: Date;
}

export { AwsDataDto as AwsDataDto };