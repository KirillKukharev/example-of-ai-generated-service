import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserOperationsService } from "./useroperations.service";
import { PaymentHistoryDto } from "../userOperations/PaymentHistoryDto";

@swagger.ApiTags("userOperations")
@common.Controller("userOperations")
export class UserOperationsController {
  constructor(protected readonly service: UserOperationsService) {}

  @common.Get("/users/:userId/payments")
  @swagger.ApiOkResponse({
    type: PaymentHistoryDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetPaymentHistory(
    @common.Body()
    body: string
  ): Promise<PaymentHistoryDto[]> {
        return this.service.GetPaymentHistory(body);
      }
}
