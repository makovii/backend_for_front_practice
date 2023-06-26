import * as bcrypt from 'bcryptjs';
import { ENCODING_SALT } from "../constants";
import { SAME_EMAIL } from '../response';
import {  injectable } from 'inversify';
import { IPostEntity } from './interface/post.entity.interface';
import { PostRepository } from './repository/post.repository';
import { PostMongo } from './interface/PostMongo.interface';
import { HttpException } from '../errors/HttpException';


@injectable()
export class PostEntity implements IPostEntity{
  postRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  private _id: string;
  private _userId: string;
  private _title: string;
  private _body: string;

  get id(): string {
    return this._id;
  }
  set id(v: string) {
    this._id = v;
  }

  get userId(): string {
    return this._userId;
  }
  set userId(v: string) {
    this._userId = v;
  }
  
  get title(): string {
    return this._title;
  }
  set title(v: string) {
    this._title = v;
  }
  
  get body(): string {
    return this._body;
  }
  set body(v: string) {
    this._body = v;
  }

  public async createPost(payload: Partial<PostMongo>): Promise<PostEntity> {
    const post = await this.postRepository.createPost(payload);

    return post;
  }

  public async getPost(id: string): Promise<PostEntity | HttpException> {
    const post = await this.postRepository.getPost(id);
    return post;
  }
}
