import { BotCommand as TBotCommand } from "../api/botCommand/BotCommand";

export const BOTCOMMAND_TITLE_FIELD = "commandName";

export const BotCommandTitle = (record: TBotCommand): string => {
  return record.commandName?.toString() || String(record.id);
};
