import { Routes } from './routes/index';
import 'dotenv/config';
declare class Server {
    private readonly routes;
    app: any;
    config: any;
    server: any;
    constructor(routes: Routes);
    start(port?: number): Promise<this>;
    close(): void;
    getapp(): any;
}
export { Server };
