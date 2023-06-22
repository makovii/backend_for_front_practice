import * as express from "express";
import RouterAuth from "../../auth/router";
import { inject, injectable } from "inversify";
import { CONTAINER_TYPES } from "../../di/TYPES";

@injectable()
export class Routes {
  constructor(
    @inject(CONTAINER_TYPES.RouterAuth) private readonly routerAuth: RouterAuth,
  ) {}
  
  public routes = () => {
    const router = express.Router();
  
    router.use('/auth', this.routerAuth.getRouter());
  
    return router;
  };
}
