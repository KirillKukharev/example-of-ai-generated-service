/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AdminUser } from "./AdminUser";
import { AdminUserCountArgs } from "./AdminUserCountArgs";
import { AdminUserFindManyArgs } from "./AdminUserFindManyArgs";
import { AdminUserFindUniqueArgs } from "./AdminUserFindUniqueArgs";
import { CreateAdminUserArgs } from "./CreateAdminUserArgs";
import { UpdateAdminUserArgs } from "./UpdateAdminUserArgs";
import { DeleteAdminUserArgs } from "./DeleteAdminUserArgs";
import { AdminUserService } from "../adminUser.service";
@graphql.Resolver(() => AdminUser)
export class AdminUserResolverBase {
  constructor(protected readonly service: AdminUserService) {}

  async _adminUsersMeta(
    @graphql.Args() args: AdminUserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AdminUser])
  async adminUsers(
    @graphql.Args() args: AdminUserFindManyArgs
  ): Promise<AdminUser[]> {
    return this.service.adminUsers(args);
  }

  @graphql.Query(() => AdminUser, { nullable: true })
  async adminUser(
    @graphql.Args() args: AdminUserFindUniqueArgs
  ): Promise<AdminUser | null> {
    const result = await this.service.adminUser(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AdminUser)
  async createAdminUser(
    @graphql.Args() args: CreateAdminUserArgs
  ): Promise<AdminUser> {
    return await this.service.createAdminUser({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AdminUser)
  async updateAdminUser(
    @graphql.Args() args: UpdateAdminUserArgs
  ): Promise<AdminUser | null> {
    try {
      return await this.service.updateAdminUser({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AdminUser)
  async deleteAdminUser(
    @graphql.Args() args: DeleteAdminUserArgs
  ): Promise<AdminUser | null> {
    try {
      return await this.service.deleteAdminUser(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
