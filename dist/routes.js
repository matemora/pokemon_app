"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var abilities_1 = require("./abilities");
var path_1 = __importDefault(require("path"));
var routes = express_1.Router();
routes.get('/', function (req, res) {
    res.sendFile(path_1.default.normalize(path_1.default.join(__dirname + '/../public/index.html')));
});
routes.get('/listOptions', function (req, res) {
    res.send({
        abilities: abilities_1.abilities,
        generation: abilities_1.generation,
        type: abilities_1.type
    });
});
exports.default = routes;
