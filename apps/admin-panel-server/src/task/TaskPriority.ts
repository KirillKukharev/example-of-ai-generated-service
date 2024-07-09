import { registerEnumType } from "@nestjs/graphql";

export enum TaskPriority {
    Low = "Low",
    Medium = "Medium",
    High = "High"
}

registerEnumType(TaskPriority, {
    name: "TaskPriority",
  });