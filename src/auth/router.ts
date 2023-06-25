import * as express from 'express';
import { Router } from 'express-serve-static-core';
import { AuthController } from './auth.controller';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../di/TYPES';

@injectable()
class RouterAuth {
  router: Router;

  constructor(
    @inject(CONTAINER_TYPES.AuthController) private readonly authController: AuthController,
  ) {
    this.router = express.Router();

    this.router.get('/registration', this.authController.createUser);
    this.router.get('/login', this.authController.login);    
  }

  public getRouter(): express.Router {
    return this.router;
  }

}


export default RouterAuth;
