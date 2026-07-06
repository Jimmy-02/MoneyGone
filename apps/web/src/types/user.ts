export type UserRole = "customer" | "support" | "admin";

export interface User {
  id: string;
  clerkUserId: string;
  email: string;
  displayName: string | null;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface MeResponse {
  user: User;
}