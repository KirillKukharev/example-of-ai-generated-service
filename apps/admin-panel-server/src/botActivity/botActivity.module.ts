import { Module } from "@nestjs/common";
import { BotActivityModuleBase } from "./base/botActivity.module.base";
import { BotActivityService } from "./botActivity.service";
import { BotActivityController } from "./botActivity.controller";
import { BotActivityResolver } from "./botActivity.resolver";

@Module({
  imports: [BotActivityModuleBase],
  controllers: [BotActivityController],
  providers: [BotActivityService, BotActivityResolver],
  exports: [BotActivityService],
})
export class BotActivityModule {}
