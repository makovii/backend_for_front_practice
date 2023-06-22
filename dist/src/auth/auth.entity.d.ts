import { IAuthEntity } from './interface/entity.interface';
import { HttpException } from './errors/HttpException';
export declare class AuthEntity implements IAuthEntity {
    authRepository: any;
    jwtService: any;
    constructor();
    private _id;
    private _name;
    private _email;
    private _password;
    get id(): string;
    set id(v: string);
    get name(): string;
    set name(v: string);
    get email(): string;
    set email(v: string);
    get password(): string;
    set password(v: string);
    registration(email: string, name: string, password: string): Promise<AuthEntity | HttpException>;
    login(email: string, password: string): Promise<string | HttpException>;
}
