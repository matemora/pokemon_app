"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var database_1 = __importDefault(require("./database"));
var path_1 = __importDefault(require("path"));
var apollo_server_express_1 = require("apollo-server-express");
var routes_1 = __importDefault(require("./routes"));
var server = new apollo_server_express_1.ApolloServer({
    schema: database_1.default,
});
var app = express_1.default();
app.use(express_1.default.static(path_1.default.normalize(__dirname + '/../public')));
app.use(routes_1.default);
server.applyMiddleware({ app: app, path: '/filter' });
app.listen(3001, function () {
    console.log('Server running at http://localhost:3001');
});
