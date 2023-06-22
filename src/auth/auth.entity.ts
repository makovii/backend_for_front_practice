import * as bcrypt from 'bcryptjs';
import { ENCODING_SALT } from "../constants";
import { IAuthEntity } from './interface/entity.interface';
import { AuthRepository } from './repository/auth.repository';
import { HttpException } from './errors/HttpException';
import { SAME_EMAIL, WRONG_EMAIL_OR_PASS } from '../response';
import { AuthMongo } from './interface/authMongo.interface';
import { JwtService } from './jwtStrategy';
import { inject, injectable } from 'inversify';


@injectable()
export class AuthEntity implements IAuthEntity {
  authRepository;
  jwtService;

  constructor() {
    this.authRepository = new AuthRepository();
    this.jwtService = new JwtService();
  }

  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;

  get id(): string {
    return this._id;
  }
  set id(v: string) {
    this._id = v;
  }

  get name(): string {
    return this._name;
  }
  set name(v: string) {
    this._name = v;
  }
  
  get email(): string {
    return this._email;
  }
  set email(v: string) {
    this._email = v;
  }
  
  get password(): string {
    return this._password;
  }
  set password(v: string) {
    this._password = v;
  }

  public async registration(email: string, name: string, password: string): Promise<AuthEntity | HttpException> {
    const sameEmailUser: AuthEntity = await this.authRepository.getUserByEmail(email);
    if (sameEmailUser) {
      return new HttpException(SAME_EMAIL, 400);
    }

    const hashPassword: string = await bcrypt.hash(password, ENCODING_SALT);

    const user = await this.authRepository.createUser(email, name, hashPassword);
    delete user.password;

    return user;
  }

  public async login(email: string, password: string): Promise<string | HttpException> {
    const user = await this.authRepository.getUserByEmail(email);
    if (!user) {
      return new HttpException(WRONG_EMAIL_OR_PASS, 400);
    }
    const passwordEqual = await bcrypt.compare(password, user.password);
    if (!passwordEqual) {
      return new HttpException(WRONG_EMAIL_OR_PASS, 400);
    }

    const payload: Partial<AuthMongo> = {
      _id: user._id,
      name: user._name,
      email: user._email,
    };
    
    return this.jwtService.sign(payload)
  }
}
