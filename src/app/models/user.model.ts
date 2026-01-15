export type UserRole = 'user' | 'vendor' | 'delivery' | 'admin';

export interface IUser {
  _id?: string;
  id?: string; // backend sends id sometimes
  name: string;
  email: string;
  role: UserRole;
}
