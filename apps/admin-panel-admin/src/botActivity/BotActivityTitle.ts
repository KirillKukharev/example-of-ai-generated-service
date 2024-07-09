import { BotActivity as TBotActivity } from "../api/botActivity/BotActivity";

export const BOTACTIVITY_TITLE_FIELD = "id";

export const BotActivityTitle = (record: TBotActivity): string => {
  return record.id?.toString() || String(record.id);
};
