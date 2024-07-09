export type TaskCreateInput = {
  title?: string | null;
  description?: string | null;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  dueDate?: Date | null;
};
