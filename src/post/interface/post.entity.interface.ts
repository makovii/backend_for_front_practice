import { PostEntity } from "../post.entity";
import { PostMongo } from "./PostMongo.interface";

export interface IPostEntity {
  createPost(payload: Partial<PostMongo>): Promise<PostEntity>;

  getPost(id: string): Promise<PostEntity>;
}
