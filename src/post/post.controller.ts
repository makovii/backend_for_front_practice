import { Request, Response } from "express";
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from "../di/TYPES";
import { PostEntity } from "./post.entity";

@injectable()
export class PostController {

  constructor(
    @inject(CONTAINER_TYPES.PostEntity) private readonly postEntity: PostEntity,
  ) {}

  public createPost = async (req: Request, res: Response) => {
    try {
      const result = await this.postEntity.createPost(req.body);
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
