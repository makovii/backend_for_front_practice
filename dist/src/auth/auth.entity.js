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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthEntity = void 0;
const bcrypt = require("bcryptjs");
const constants_1 = require("../constants");
const auth_repository_1 = require("./repository/auth.repository");
const HttpException_1 = require("./errors/HttpException");
const response_1 = require("../response");
const jwtStrategy_1 = require("./jwtStrategy");
const inversify_1 = require("inversify");
let AuthEntity = class AuthEntity {
    constructor() {
        this.authRepository = new auth_repository_1.AuthRepository();
        this.jwtService = new jwtStrategy_1.JwtService();
    }
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get email() {
        return this._email;
    }
    set email(v) {
        this._email = v;
    }
    get password() {
        return this._password;
    }
    set password(v) {
        this._password = v;
    }
    async registration(email, name, password) {
        const sameEmailUser = await this.authRepository.getUserByEmail(email);
        if (sameEmailUser) {
            return new HttpException_1.HttpException(response_1.SAME_EMAIL, 400);
        }
        const hashPassword = await bcrypt.hash(password, constants_1.ENCODING_SALT);
        const user = await this.authRepository.createUser(email, name, hashPassword);
        delete user.password;
        return user;
    }
    async login(email, password) {
        const user = await this.authRepository.getUserByEmail(email);
        if (!user) {
            return new HttpException_1.HttpException(response_1.WRONG_EMAIL_OR_PASS, 400);
        }
        const passwordEqual = await bcrypt.compare(password, user.password);
        if (!passwordEqual) {
            return new HttpException_1.HttpException(response_1.WRONG_EMAIL_OR_PASS, 400);
        }
        const payload = {
            _id: user._id,
            name: user._name,
            email: user._email,
        };
        return this.jwtService.sign(payload);
    }
};
AuthEntity = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], AuthEntity);
exports.AuthEntity = AuthEntity;
//# sourceMappingURL=auth.entity.js.map