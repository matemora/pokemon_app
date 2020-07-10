require('dotenv').config({path: './pokemon_app/server/.env'})
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.DB_USR}:${process.env.DB_PASS}@cluster0.9aerh.gcp.mongodb.net/${process.env.DB_COLL}?retryWrites=true&w=majority`

const connectToMongo = async () => {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
    });
    return "Success"
}

const Schema = mongoose.Schema;

const model = mongoose.model;

const PokemonSchema = new Schema({
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

const pokemonSchema = model('Pokemon', PokemonSchema);

const typeDefs = `
    type Query { pokemonSample(sampleSize: Int!, is_leg: Boolean!, generation: Int, type1: String, type2: String, ability: String): [Pokemon]! }
    type Pokemon {
      name: String
      japanese_name: String
      pokedex_number: Float
      type1: String
      type2: String
      height_m: Float
      weight_kg: Float
      classfication: String
      generation: Float
      is_legendary: Boolean
      hp: Float
      speed: Float
      attack: Float
      defense: Float
      sp_attack: Float
      sp_defense: Float
      capture_rate: String
      experience_growth: Float
      percentage_male: Float
      abilities: [String]!
      base_total: Float
      base_happiness: Float
      base_egg_steps: Float
      against_water: Float
      against_steel: Float
      against_rock: Float
      against_psychic: Float
      against_poison: Float
      against_normal: Float
      against_ice: Float
      against_ground: Float
      against_grass: Float
      }
  `;

const resolvers = {
    Query: {
        pokemonSample: async (_, { sampleSize, is_leg, generation, type1, type2, ability }) => {
            try {
                await connectToMongo();
            }catch (e){
                console.log(e)
            }
            aggPipeLine = [];
            args = []
            args.push(
                ['is_legendary', is_leg],
                ['generation', generation],
                ['type1', type1],
                ['type2', type2],
                ['abilities', ability]
            )
            // aggPipeLine.push({'$match':Object.fromEntries(args.filter(item=>item[1]!=undefined))});
            console.log(args, args.filter(item => item != undefined))
            aggPipeLine.push({ '$match': Object.fromEntries(args.filter(item => item[1] != '')) })
            aggSample = { '$sample': { 'size': sampleSize } };
            aggPipeLine.push(aggSample);
            console.log(aggPipeLine)
            aggregation = pokemonSchema.aggregate(aggPipeLine).exec();
            const agreg = await aggregation;
            return agreg
        }
    },
};

exports.pokemonSchema = pokemonSchema;
exports.typeDefs = typeDefs;
exports.resolvers = resolvers;
exports.connectToMongo = connectToMongo;
