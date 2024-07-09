import { BotActivityWhereInput } from "./BotActivityWhereInput";
import { BotActivityOrderByInput } from "./BotActivityOrderByInput";

export type BotActivityFindManyArgs = {
  where?: BotActivityWhereInput;
  orderBy?: Array<BotActivityOrderByInput>;
  skip?: number;
  take?: number;
};
