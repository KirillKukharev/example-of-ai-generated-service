import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { TaskStatus } from "./TaskStatus";
import { TaskPriority } from "./TaskPriority";

@ArgsType()
@ObjectType("TaskDtoObject")
class TaskDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    title!: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    description?: string;

    @Field(() => TaskStatus)
    @ApiProperty({
        required: true,
        enum: TaskStatus
    })
    status!: "Pending" | "InProgress" | "Completed" | "Archived";

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    dueDate?: Date;

    @Field(() => TaskPriority, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        enum: TaskPriority
    })
    priority?: "Low" | "Medium" | "High";
}

export { TaskDto as TaskDto };