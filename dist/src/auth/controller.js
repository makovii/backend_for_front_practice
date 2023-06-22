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
exports.AuthController = void 0;
const auth_entity_1 = require("./auth.entity");
const inversify_1 = require("inversify");
const TYPES_1 = require("../di/TYPES");
let AuthController = class AuthController {
    constructor(authEntity) {
        this.authEntity = authEntity;
        this.createUser = async (req, res) => {
            try {
                const { body } = req;
                const result = await this.authEntity.registration(body.email, body.name, body.password);
                res.statusCode = 200;
                return res.json(result);
            }
            catch (error) {
                res.statusCode = 500;
                return res.json({
                    success: false,
                    message: error.message
                });
            }
        };
        this.login = async (req, res) => {
            try {
                const { body } = req;
                const result = await this.authEntity.login(body.email, body.password);
                res.statusCode = 200;
                return res.json(result);
            }
            catch (error) {
                res.statusCode = 500;
                return res.json({
                    success: false,
                    message: error.message
                });
            }
        };
    }
};
AuthController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(TYPES_1.CONTAINER_TYPES.AuthEntity)),
    __metadata("design:paramtypes", [auth_entity_1.AuthEntity])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=controller.js.map