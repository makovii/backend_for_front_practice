import { Request, Response } from "express";
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from "../di/TYPES";
import { PostEntity } from "./post.entity";
import { PostMapper } from "./post.mapper";

@injectable()
export class PostController {

  constructor(
    @inject(CONTAINER_TYPES.PostEntity) private readonly postEntity: PostEntity,
    @inject(CONTAINER_TYPES.PostMapper) private readonly postMapper: PostMapper,
  ) {}

  public createPost = async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const result = await this.postEntity.createPost(body); 
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

  public getPost = async (req: Request, res: Response) => {
    try {
      const id = req.query.id as string;
      const result = await this.postEntity.getPost(id);
      // const result = await this.postEntity.createPost(req.body);
      const output = this.postMapper.EntityToDto(result);
      res.statusCode = 200;
      return res.json(output);
    } catch (error) {
      res.statusCode = 500;
      return res.json({
        success: false,
        message: error.message
      });
    }
  }

}
