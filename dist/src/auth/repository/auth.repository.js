"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const auth_model_1 = require("./auth.model");
const auth_mapper_1 = require("../auth.mapper");
class AuthRepository {
    constructor() {
        this.authModel = auth_model_1.Auth;
    }
    async createUser(email, name, password) {
        const newUser = await this.authModel.create({ email, name, password });
        const entity = auth_mapper_1.AuthMapper.RepositoryToEntity(newUser, this);
        return entity;
    }
    async getUserByEmail(email) {
        const newUser = await this.authModel.findOne({ email });
        if (newUser === null)
            return null;
        const entity = auth_mapper_1.AuthMapper.RepositoryToEntity(newUser, this);
        return entity;
    }
}
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=auth.repository.js.map