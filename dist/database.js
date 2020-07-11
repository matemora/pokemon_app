"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokemonSchema = exports.connectToMongo = void 0;
var dotenv = __importStar(require("dotenv"));
dotenv.config({ path: './dist/.env' });
var mongoose_1 = __importDefault(require("mongoose"));
var graphql_tools_1 = require("graphql-tools");
var uri = "mongodb+srv://" + process.env.DB_USR + ":" + process.env.DB_PASS + "@cluster0.9aerh.gcp.mongodb.net/" + process.env.DB_COLL + "?retryWrites=true&w=majority";
console.log(uri);
exports.connectToMongo = function () { return __awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mongoose_1.default.connect(uri, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        serverSelectionTimeoutMS: 5000
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/, "Success"];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var Schema = mongoose_1.default.Schema;
var model = mongoose_1.default.model;
var PokemonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    japanese_name: {
        type: String,
        required: true,
    },
    pokedex_number: {
        type: Number,
        required: true,
    },
    type1: {
        type: String,
        required: true,
    },
    type2: {
        type: String,
        required: true,
    },
    height_m: {
        type: Number,
        required: true,
    },
    weight_kg: {
        type: Number,
        required: true,
    },
    classfication: {
        type: String,
        required: true,
    },
    generation: {
        type: Number,
        required: true,
    },
    is_legendary: {
        type: Boolean,
        required: true,
    },
    hp: {
        type: Number,
        required: true,
    },
    speed: {
        type: Number,
        required: true,
    },
    attack: {
        type: Number,
        required: true,
    },
    defense: {
        type: Number,
        required: true,
    },
    sp_attack: {
        type: Number,
        required: true,
    },
    sp_defense: {
        type: Number,
        required: true,
    },
    capture_rate: {
        type: String,
        required: true,
    },
    experience_growth: {
        type: Number,
        required: true,
    },
    percentage_male: {
        type: Number,
        required: true,
    },
    abilities: {
        type: [String],
        required: true,
    },
    base_total: {
        type: Number,
        required: true,
    },
    base_happiness: {
        type: Number,
        required: true,
    },
    base_egg_steps: {
        type: Number,
        required: true,
    },
    against_water: {
        type: Number,
        required: true,
    },
    against_steel: {
        type: Number,
        required: true,
    },
    against_rock: {
        type: Number,
        required: true,
    },
    against_psychic: {
        type: Number,
        required: true,
    },
    against_poison: {
        type: Number,
        required: true,
    },
    against_normal: {
        type: Number,
        required: true,
    },
    against_ice: {
        type: Number,
        required: true,
    },
    against_ground: {
        type: Number,
        required: true,
    },
    against_grass: {
        type: Number,
        required: true,
    },
    against_ghost: {
        type: Number,
        required: true,
    },
    against_flying: {
        type: Number,
        required: true,
    },
    against_fire: {
        type: Number,
        required: true,
    },
    against_fight: {
        type: Number,
        required: true,
    },
    against_fairy: {
        type: Number,
        required: true,
    },
    against_electric: {
        type: Number,
        required: true,
    },
    against_dragon: {
        type: Number,
        required: true,
    },
    against_dark: {
        type: Number,
        required: true,
    },
    against_bug: {
        type: Number,
        required: true,
    }
});
exports.pokemonSchema = model('Pokemon', PokemonSchema);
var typeDefs = "\n    type Query { pokemonSample(sampleSize: Int!, is_leg: Boolean!, generation: Int, type1: String, type2: String, ability: String): [Pokemon]! }\n    type Pokemon {\n      name: String\n      japanese_name: String\n      pokedex_number: Float\n      type1: String\n      type2: String\n      height_m: Float\n      weight_kg: Float\n      classfication: String\n      generation: Float\n      is_legendary: Boolean\n      hp: Float\n      speed: Float\n      attack: Float\n      defense: Float\n      sp_attack: Float\n      sp_defense: Float\n      capture_rate: String\n      experience_growth: Float\n      percentage_male: Float\n      abilities: [String]!\n      base_total: Float\n      base_happiness: Float\n      base_egg_steps: Float\n      against_water: Float\n      against_steel: Float\n      against_rock: Float\n      against_psychic: Float\n      against_poison: Float\n      against_normal: Float\n      against_ice: Float\n      against_ground: Float\n      against_grass: Float\n      }\n  ";
var resolvers = {
    Query: {
        pokemonSample: function (_, filterArgs) { return __awaiter(void 0, void 0, void 0, function () {
            var e_2, aggPipeLine, args, aggSample, aggregation, agreg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, exports.connectToMongo()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [3 /*break*/, 3];
                    case 3:
                        aggPipeLine = [];
                        args = [];
                        console.log(filterArgs);
                        args.push(['is_legendary', filterArgs.is_leg], ['generation', filterArgs.generation], ['type1', filterArgs.type1], ['type2', filterArgs.type2], ['abilities', filterArgs.ability]);
                        console.log(args, args.filter(function (item) { return item != undefined; }));
                        aggPipeLine.push({ '$match': Object.fromEntries(args.filter(function (item) { return item[1] != ''; })) });
                        aggSample = { '$sample': { 'size': filterArgs.sampleSize } };
                        aggPipeLine.push(aggSample);
                        console.log(aggPipeLine);
                        aggregation = exports.pokemonSchema.aggregate(aggPipeLine).exec();
                        return [4 /*yield*/, aggregation];
                    case 4:
                        agreg = _a.sent();
                        return [2 /*return*/, agreg];
                }
            });
        }); }
    },
};
var schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
});
exports.default = schema;
