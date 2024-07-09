export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  dueDate: Date | null;
};
