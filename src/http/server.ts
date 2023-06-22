import * as express from 'express';
import { Routes } from './routes/index';
import * as env from 'env-var';
import 'dotenv/config';
import { inject, injectable } from "inversify";
import { CONTAINER_TYPES } from '../di/TYPES';

@injectable()
class Server {
  app
  config;
  server

  constructor(
    @inject(CONTAINER_TYPES.Routes) private readonly routes: Routes,
  ) {}

  async start(port = env.get("PORT").required().asInt()) {
    this.app = express();

    this.app.use(express.json());
    this.app.use(this.routes.routes());

    try {
      this.app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }

    return this;
  }

  close() {
    this.server.close();
  }

  getapp() {
    return this.app;
  }

}

export { Server };
