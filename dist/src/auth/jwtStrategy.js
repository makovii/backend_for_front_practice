"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const jwt = require("jsonwebtoken");
const env = require("env-var");
require("dotenv/config");
class JwtService {
    constructor() {
        this.sign = (payload) => {
            return jwt.sign(payload, env.get("SECRET_JWT").required().asString(), { expiresIn: env.get("EXPRESS_IN").required().asString() });
        };
        this.verify = (token) => {
            return jwt.verify(token, env.get("SECRET_JWT").required().asString());
        };
    }
}
exports.JwtService = JwtService;
//# sourceMappingURL=jwtStrategy.js.map