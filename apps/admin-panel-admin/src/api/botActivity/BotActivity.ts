export type BotActivity = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  activityType?: "Option1" | null;
  details: string | null;
  userId: number | null;
};
