import * as graphql from "@nestjs/graphql";
import { BotActivityResolverBase } from "./base/botActivity.resolver.base";
import { BotActivity } from "./base/BotActivity";
import { BotActivityService } from "./botActivity.service";

@graphql.Resolver(() => BotActivity)
export class BotActivityResolver extends BotActivityResolverBase {
  constructor(protected readonly service: BotActivityService) {
    super(service);
  }
}
