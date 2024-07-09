import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BotActivityServiceBase } from "./base/botActivity.service.base";

@Injectable()
export class BotActivityService extends BotActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
