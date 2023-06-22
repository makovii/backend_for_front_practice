import { AuthEntity } from "../auth.entity";
import { HttpException } from "../errors/HttpException";
export interface IAuthEntity {
    registration(name: string, email: string, password: string): Promise<AuthEntity | HttpException>;
    login(email: string, password: string): Promise<string | HttpException>;
}
