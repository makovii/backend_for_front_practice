import { IAuthRepository } from "../interface/auth.repository.interface";
import { AuthEntity } from "../auth.entity";
import { Auth } from "./auth.model";
import { AuthMapper } from "../auth.mapper";
import { AuthMongo } from "../interface/authMongo.interface";

export class AuthRepository implements IAuthRepository {
  authModel
  constructor() {
    this.authModel = Auth;
  }

  public async createUser(email: string, name: string, password: string): Promise<AuthEntity> {
    const newUser = await this.authModel.create({ email, name, password });
    const entity = AuthMapper.RepositoryToEntity(newUser, this);

    return entity;
  }

  public async getUserByEmail(email: string): Promise<AuthEntity> | null {
    const newUser: AuthMongo | null = await this.authModel.findOne({ email });
    if (newUser === null) return null;
    const entity = AuthMapper.RepositoryToEntity(newUser, this);

    return entity;
  }
}
