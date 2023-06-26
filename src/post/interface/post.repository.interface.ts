import { HttpException } from "../../errors/HttpException";
import { PostEntity } from "../post.entity";
import { PostMongo } from "./PostMongo.interface";

export interface IPostRepository {
  createPost(payload: Partial<PostMongo>): Promise<PostEntity>;

  getPost(id: string): Promise<PostEntity | HttpException>;
  
}
