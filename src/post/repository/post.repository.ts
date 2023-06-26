import { HttpException } from "../../errors/HttpException";
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

  public async getPost(id: string): Promise<PostEntity | HttpException> {
    let post;
    try {
      post = await this.postModel.findOne({ _id: id });
      
    } catch (e) {
      // TODO: create and return error      
      console.log(e);
    }
    if(!post) return new HttpException(`There isn't any post with id - ${id}`, 400)
    const entity = PostMapper.RepositoryToEntity(post);
    return entity;
  }
}
