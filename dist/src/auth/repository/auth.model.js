"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
const database_1 = require("../../database");
const userSchema = new mongoose_1.default.Schema({
    name: String,
    email: String,
    password: String,
});
exports.userSchema = userSchema;
exports.Auth = database_1.connection.model('auth', userSchema);
//# sourceMappingURL=auth.model.js.map