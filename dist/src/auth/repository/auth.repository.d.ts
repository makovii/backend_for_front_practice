import { IAuthRepository } from "../interface/repository.interface";
import { AuthEntity } from "../auth.entity";
export declare class AuthRepository implements IAuthRepository {
    authModel: any;
    constructor();
    createUser(email: string, name: string, password: string): Promise<AuthEntity>;
    getUserByEmail(email: string): Promise<AuthEntity> | null;
}
