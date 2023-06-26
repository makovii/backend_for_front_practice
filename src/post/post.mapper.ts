import { injectable } from "inversify";
import { PostMongo } from "./interface/PostMongo.interface";
import { PostDto } from "./post.dto";
import { PostEntity } from "./post.entity";
import { PostRepository } from "./repository/post.repository";

@injectable()
export class PostMapper {
  public static RepositoryToEntity(origin: PostMongo): PostEntity {
    const newPost = new PostEntity();
    
    newPost.id = String(origin._id);
    newPost.title = origin.title;
    newPost.body = origin.body;
    newPost.userId= origin.userId;

    return newPost;
  }

  public EntityToDto(origin: PostEntity): PostDto {
    const dto = new PostDto();
    dto.title = origin.title;
    dto.body = origin.body;

    return dto;
  }
}
