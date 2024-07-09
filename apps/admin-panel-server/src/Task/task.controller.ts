import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TaskService } from "./task.service";
import { TaskDto } from "../task/TaskDto";

@swagger.ApiTags("tasks")
@common.Controller("tasks")
export class TaskController {
  constructor(protected readonly service: TaskService) {}

  @common.Post("/task")
  @swagger.ApiOkResponse({
    type: TaskDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateTask(
    @common.Body()
    body: TaskDto
  ): Promise<TaskDto> {
        return this.service.CreateTask(body);
      }

  @common.Delete("/task/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteTask(
    @common.Body()
    body: TaskDto
  ): Promise<string> {
        return this.service.DeleteTask(body);
      }

  @common.Get("/task/:id")
  @swagger.ApiOkResponse({
    type: TaskDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetTask(
    @common.Body()
    body: TaskDto
  ): Promise<TaskDto> {
        return this.service.GetTask(body);
      }

  @common.Get("/tasks")
  @swagger.ApiOkResponse({
    type: TaskDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListTasks(
    @common.Body()
    body: TaskDto
  ): Promise<TaskDto[]> {
        return this.service.ListTasks(body);
      }

  @common.Put("/task/:id")
  @swagger.ApiOkResponse({
    type: TaskDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateTask(
    @common.Body()
    body: TaskDto
  ): Promise<TaskDto> {
        return this.service.UpdateTask(body);
      }
}
