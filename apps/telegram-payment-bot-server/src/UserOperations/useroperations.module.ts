import { Module } from "@nestjs/common";
import { UserOperationsService } from "./useroperations.service";
import { UserOperationsController } from "./useroperations.controller";
import { UserOperationsResolver } from "./useroperations.resolver";

@Module({
  controllers: [UserOperationsController],
  providers: [UserOperationsService, UserOperationsResolver],
  exports: [UserOperationsService],
})
export class UserOperationsModule {}
