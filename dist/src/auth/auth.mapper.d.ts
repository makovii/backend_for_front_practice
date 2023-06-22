import { AuthDto } from "./auth.dto";
import { AuthEntity } from "./auth.entity";
import { AuthRepository } from "./repository/auth.repository";
import { AuthMongo } from "./interface/authMongo.interface";
export declare class AuthMapper {
    static RepositoryToEntity(origin: AuthMongo, context: AuthRepository): AuthEntity;
    static EntityToDto(origin: AuthEntity): AuthDto;
}
