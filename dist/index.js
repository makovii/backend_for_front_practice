"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TYPES_1 = require("./src/di/TYPES");
const containerConfig_1 = require("./src/di/containerConfig");
containerConfig_1.MainContainer.get(TYPES_1.CONTAINER_TYPES.Server).start();
//# sourceMappingURL=index.js.map