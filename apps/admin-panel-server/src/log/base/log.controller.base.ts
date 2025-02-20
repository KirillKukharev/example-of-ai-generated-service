/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LogService } from "../log.service";
import { LogCreateInput } from "./LogCreateInput";
import { Log } from "./Log";
import { LogFindManyArgs } from "./LogFindManyArgs";
import { LogWhereUniqueInput } from "./LogWhereUniqueInput";
import { LogUpdateInput } from "./LogUpdateInput";

export class LogControllerBase {
  constructor(protected readonly service: LogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Log })
  async createLog(@common.Body() data: LogCreateInput): Promise<Log> {
    return await this.service.createLog({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Log] })
  @ApiNestedQuery(LogFindManyArgs)
  async logs(@common.Req() request: Request): Promise<Log[]> {
    const args = plainToClass(LogFindManyArgs, request.query);
    return this.service.logs({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Log })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async log(@common.Param() params: LogWhereUniqueInput): Promise<Log | null> {
    const result = await this.service.log({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Log })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLog(
    @common.Param() params: LogWhereUniqueInput,
    @common.Body() data: LogUpdateInput
  ): Promise<Log | null> {
    try {
      return await this.service.updateLog({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Log })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLog(
    @common.Param() params: LogWhereUniqueInput
  ): Promise<Log | null> {
    try {
      return await this.service.deleteLog({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
