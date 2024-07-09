import * as graphql from "@nestjs/graphql";
import { TaskDto } from "../task/TaskDto";
import { TaskService } from "./task.service";

export class TaskResolver {
  constructor(protected readonly service: TaskService) {}

  @graphql.Mutation(() => TaskDto)
  async CreateTask(
    @graphql.Args()
    args: TaskDto
  ): Promise<TaskDto> {
    return this.service.CreateTask(args);
  }

  @graphql.Mutation(() => String)
  async DeleteTask(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteTask(args);
  }

  @graphql.Query(() => TaskDto)
  async GetTask(
    @graphql.Args()
    args: string
  ): Promise<TaskDto> {
    return this.service.GetTask(args);
  }

  @graphql.Query(() => [TaskDto])
  async ListTasks(
    @graphql.Args()
    args: string
  ): Promise<TaskDto[]> {
    return this.service.ListTasks(args);
  }

  @graphql.Mutation(() => TaskDto)
  async UpdateTask(
    @graphql.Args()
    args: TaskDto
  ): Promise<TaskDto> {
    return this.service.UpdateTask(args);
  }
}
