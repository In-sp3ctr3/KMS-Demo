import { User } from "./User";

export interface UserRepositoryInterface {
  getUserByEmail(email: string): Promise<User | null>;
  createUser(data: User): Promise<User>;
}