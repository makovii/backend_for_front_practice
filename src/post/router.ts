import * as express from 'express';
import { Router } from 'express-serve-static-core';
import { PostController } from './post.controller';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../di/TYPES';

@injectable()
class RouterPost {
  router: Router;

  constructor(
    @inject(CONTAINER_TYPES.PostController) private readonly postController: PostController,
  ) {
    this.router = express.Router();

    this.router.post('/createPost', this.postController.createPost);
  }

  public getRouter(): express.Router {
    return this.router;
  }

}


export default RouterPost;
