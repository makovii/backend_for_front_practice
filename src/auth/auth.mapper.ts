import { AuthDto } from "./auth.dto";
import { AuthEntity } from "./auth.entity";
import { AuthRepository } from "./repository/auth.repository";
import { AuthMongo } from "./interface/authMongo.interface";

export class AuthMapper {
  public static RepositoryToEntity(origin: AuthMongo, context: AuthRepository): AuthEntity {
    const newUser = new AuthEntity();
    
    newUser.id = String(origin._id);
    newUser.name = origin.name;
    newUser.email = origin.email;
    newUser.password= origin.password;

    return newUser;
  }

  public static EntityToDto(origin: AuthEntity): AuthDto {
    const dto = new AuthDto();
    dto.name = origin.name;
    dto.email = origin.email;
    dto.password = origin.password;

    return dto;
  }
}
