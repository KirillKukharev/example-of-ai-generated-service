import { registerEnumType } from "@nestjs/graphql";

export enum TaskStatus {
    Pending = "Pending",
    InProgress = "InProgress",
    Completed = "Completed",
    Archived = "Archived"
}

registerEnumType(TaskStatus, {
    name: "TaskStatus",
  });