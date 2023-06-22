import * as express from 'express';
import { Router } from 'express-serve-static-core';
import { AuthController } from './controller';
declare class RouterAuth {
    private readonly authController;
    router: Router;
    constructor(authController: AuthController);
    getRouter(): express.Router;
}
export default RouterAuth;
