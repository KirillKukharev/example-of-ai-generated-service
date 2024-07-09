import { Injectable } from "@nestjs/common";
import { TaskDto } from "../task/TaskDto";

@Injectable()
export class TaskService {
  constructor() {}
  async CreateTask(args: TaskDto): Promise<TaskDto> {
    throw new Error("Not implemented");
  }
  async DeleteTask(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetTask(args: string): Promise<TaskDto> {
    throw new Error("Not implemented");
  }
  async ListTasks(args: string): Promise<TaskDto[]> {
    throw new Error("Not implemented");
  }
  async UpdateTask(args: TaskDto): Promise<TaskDto> {
    throw new Error("Not implemented");
  }
}
