import { PostMongo } from "../interface/PostMongo.interface";
import { IPostRepository } from "../interface/post.repository.interface";
import { PostEntity } from "../post.entity";
import { PostMapper } from "../post.mapper";
import { Post } from "./post.model";


export class PostRepository implements IPostRepository {
  postModel
  constructor() {
    this.postModel = Post;
  }

  public async createPost(payload: Partial<PostMongo>): Promise<PostEntity> {
    const newPost = await this.postModel.create(payload);
    const entity = PostMapper.RepositoryToEntity(newPost);

    return entity;
  }

  public async getPost(id: string): Promise<PostEntity> {
    let post;
    try {
      post = await this.postModel.findOne({ _id: id });
      // return post;
    } catch (e) {
      // TODO: create and return error      
      console.log(e);
    }
    const entity = PostMapper.RepositoryToEntity(post);

    return entity;
  }
}
