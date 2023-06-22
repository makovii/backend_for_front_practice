import { CONTAINER_TYPES } from "./src/di/TYPES";
import { MainContainer } from "./src/di/containerConfig";
import { Server } from "./src/http/server";

MainContainer.get<Server>(CONTAINER_TYPES.Server).start();
