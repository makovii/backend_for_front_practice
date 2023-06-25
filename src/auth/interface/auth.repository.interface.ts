import { AuthEntity } from "../auth.entity";

export interface IAuthRepository {
  createUser(email: string, name: string, password: string): Promise<AuthEntity>;
  
  getUserByEmail(email: string): Promise<AuthEntity> | null;
}
