import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BotActivityService } from "./botActivity.service";
import { BotActivityControllerBase } from "./base/botActivity.controller.base";

@swagger.ApiTags("botActivities")
@common.Controller("botActivities")
export class BotActivityController extends BotActivityControllerBase {
  constructor(protected readonly service: BotActivityService) {
    super(service);
  }
}
