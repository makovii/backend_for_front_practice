import { Request, Response } from "express";
import { AuthEntity } from "./auth.entity";
export declare class AuthController {
    private readonly authEntity;
    constructor(authEntity: AuthEntity);
    createUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
