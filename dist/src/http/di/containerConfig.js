"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpContainer = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const TYPES_1 = require("./TYPES");
const server_1 = require("../server");
exports.httpContainer = new inversify_1.Container();
exports.httpContainer.bind(TYPES_1.HTTP_CONTAINER_TYPES.Server).to(server_1.Server);
//# sourceMappingURL=containerConfig.js.map