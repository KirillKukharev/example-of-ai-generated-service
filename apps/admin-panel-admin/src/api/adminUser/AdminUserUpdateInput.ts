export type AdminUserUpdateInput = {
  active?: boolean | null;
  username?: string | null;
  email?: string | null;
  password?: string | null;
  role?: "Option1" | null;
};
