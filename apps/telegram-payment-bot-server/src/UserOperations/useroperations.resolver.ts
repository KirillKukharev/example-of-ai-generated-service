import * as graphql from "@nestjs/graphql";
import { PaymentHistoryDto } from "../userOperations/PaymentHistoryDto";
import { UserOperationsService } from "./useroperations.service";

export class UserOperationsResolver {
  constructor(protected readonly service: UserOperationsService) {}

  @graphql.Query(() => [PaymentHistoryDto])
  async GetPaymentHistory(
    @graphql.Args()
    args: string
  ): Promise<PaymentHistoryDto[]> {
    return this.service.GetPaymentHistory(args);
  }
}
