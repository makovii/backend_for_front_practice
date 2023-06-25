import * as express from "express";
import RouterAuth from "../../auth/router";
import { inject, injectable } from "inversify";
import { CONTAINER_TYPES } from "../../di/TYPES";
import RouterPost from "../../post/router";

@injectable()
export class Routes {
  constructor(
    @inject(CONTAINER_TYPES.RouterAuth) private readonly routerAuth: RouterAuth,
    @inject(CONTAINER_TYPES.RouterPost) private readonly routerPost: RouterPost,
  ) {}
  
  public routes = () => {
    const router = express.Router();
  
    router.use('/auth', this.routerAuth.getRouter());
    router.use('/post', this.routerPost.getRouter());
  
    return router;
  };
}
