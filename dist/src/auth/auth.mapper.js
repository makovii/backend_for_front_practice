"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMapper = void 0;
const auth_dto_1 = require("./auth.dto");
const auth_entity_1 = require("./auth.entity");
class AuthMapper {
    static RepositoryToEntity(origin, context) {
        const newUser = new auth_entity_1.AuthEntity();
        newUser.id = String(origin._id);
        newUser.name = origin.name;
        newUser.email = origin.email;
        newUser.password = origin.password;
        return newUser;
    }
    static EntityToDto(origin) {
        const dto = new auth_dto_1.AuthDto();
        dto.name = origin.name;
        dto.email = origin.email;
        dto.password = origin.password;
        return dto;
    }
}
exports.AuthMapper = AuthMapper;
//# sourceMappingURL=auth.mapper.js.map