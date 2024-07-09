import { Injectable } from "@nestjs/common";
import { PaymentHistoryDto } from "../userOperations/PaymentHistoryDto";

@Injectable()
export class UserOperationsService {
  constructor() {}
  async GetPaymentHistory(args: string): Promise<PaymentHistoryDto[]> {
    throw new Error("Not implemented");
  }
}
