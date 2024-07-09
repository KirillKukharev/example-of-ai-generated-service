export type BotCommand = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  createdBy: string | null;
  commandName: string | null;
};
