"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainContainer = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const TYPES_1 = require("./TYPES");
const server_1 = require("../http/server");
const routes_1 = require("../http/routes");
const router_1 = require("../auth/router");
const controller_1 = require("../auth/controller");
const auth_entity_1 = require("../auth/auth.entity");
exports.MainContainer = new inversify_1.Container();
exports.MainContainer.bind(TYPES_1.CONTAINER_TYPES.Server).to(server_1.Server);
exports.MainContainer.bind(TYPES_1.CONTAINER_TYPES.Routes).to(routes_1.Routes);
exports.MainContainer.bind(TYPES_1.CONTAINER_TYPES.RouterAuth).to(router_1.default);
exports.MainContainer.bind(TYPES_1.CONTAINER_TYPES.AuthController).to(controller_1.AuthController);
exports.MainContainer.bind(TYPES_1.CONTAINER_TYPES.AuthEntity).to(auth_entity_1.AuthEntity);
//# sourceMappingURL=containerConfig.js.map