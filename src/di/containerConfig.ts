import "reflect-metadata";
import { Container } from 'inversify';
import { CONTAINER_TYPES } from './TYPES';
import { Server } from '../http/server';
import { Routes } from "../http/routes";
import RouterAuth from "../auth/router";
import { AuthController } from "../auth/auth.controller";
import { AuthEntity } from "../auth/auth.entity";
import { PostController } from "../post/post.controller";
import RouterPost from "../post/router";
import { PostEntity } from "../post/post.entity";

export const MainContainer = new Container();

// Server
MainContainer.bind<Server>(CONTAINER_TYPES.Server).to(Server);

MainContainer.bind<Routes>(CONTAINER_TYPES.Routes).to(Routes);

MainContainer.bind<RouterAuth>(CONTAINER_TYPES.RouterAuth).to(RouterAuth);
MainContainer.bind<RouterPost>(CONTAINER_TYPES.RouterPost).to(RouterPost);

MainContainer.bind<AuthController>(CONTAINER_TYPES.AuthController).to(AuthController);
MainContainer.bind<PostController>(CONTAINER_TYPES.PostController).to(PostController);

MainContainer.bind<AuthEntity>(CONTAINER_TYPES.AuthEntity).to(AuthEntity);
MainContainer.bind<PostEntity>(CONTAINER_TYPES.PostEntity).to(PostEntity);


