"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const env = require("env-var");
const mongoose_1 = require("mongoose");
require("dotenv/config");
mongoose_1.default.connect(env.get('MONGO_URL').required().asString(), {});
const connection = mongoose_1.default.connection;
exports.connection = connection;
connection.on('connected', function () {
    console.log('Database connected');
});
connection.on('disconnected', function () {
    console.log('MongoDB disconnected ');
});
connection.on('error', console.error.bind(console));
//# sourceMappingURL=database.js.map