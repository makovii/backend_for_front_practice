"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const index_1 = require("./routes/index");
const env = require("env-var");
require("dotenv/config");
const inversify_1 = require("inversify");
const TYPES_1 = require("../di/TYPES");
let Server = class Server {
    constructor(routes) {
        this.routes = routes;
    }
    async start(port = env.get("PORT").required().asInt()) {
        this.app = express();
        this.app.use(express.json());
        this.app.use(this.routes.routes());
        try {
            this.app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
        }
        catch (error) {
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
};
Server = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(TYPES_1.CONTAINER_TYPES.Routes)),
    __metadata("design:paramtypes", [index_1.Routes])
], Server);
exports.Server = Server;
//# sourceMappingURL=server.js.map