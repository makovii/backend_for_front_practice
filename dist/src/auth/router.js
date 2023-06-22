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
const express = require("express");
const controller_1 = require("./controller");
const inversify_1 = require("inversify");
const TYPES_1 = require("../di/TYPES");
let RouterAuth = class RouterAuth {
    constructor(authController) {
        this.authController = authController;
        this.router = express.Router();
        this.router.get('/registration', this.authController.createUser);
        this.router.get('/login', this.authController.login);
    }
    getRouter() {
        return this.router;
    }
};
RouterAuth = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(TYPES_1.CONTAINER_TYPES.AuthController)),
    __metadata("design:paramtypes", [controller_1.AuthController])
], RouterAuth);
exports.default = RouterAuth;
//# sourceMappingURL=router.js.map