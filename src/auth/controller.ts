import { Request, Response } from "express";
import { AuthEntity } from "./auth.entity";
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from "../di/TYPES";

@injectable()
export class AuthController {

  constructor(
    @inject(CONTAINER_TYPES.AuthEntity) private readonly authEntity: AuthEntity,
  ) {}

  public createUser = async (req: Request, res: Response) => {
    try {
      const { body }: { body: { name: string, email: string, password: string } } = req;

      const result = await this.authEntity.registration(body.email, body.name, body.password);
      res.statusCode = 200;
      return res.json(result);
    } catch (error) {
      res.statusCode = 500;
      return res.json({
        success: false,
        message: error.message
      });
    }
  }

  public login = async (req: Request, res: Response) => {
    try {
      const { body }: { body: { name: string, email: string, password: string } } = req;

      const result = await this.authEntity.login(body.email, body.password);
      res.statusCode = 200;
      return res.json(result);
    } catch (error) {
      res.statusCode = 500;
      return res.json({
        success: false,
        message: error.message
      });
    }
  }

}
