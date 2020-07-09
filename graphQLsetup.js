require('dotenv').config({ path: './pokemon_app/.env' })
const { makeExecutableSchema } = require('graphql-tools');
const mongoose = require('mongoose');
const Pokemon = require('./Pokedex').pok

const uri = `mongodb+srv://${process.env.DB_USR}:${process.env.DB_PASS}@cluster0.9aerh.gcp.mongodb.net/${process.env.DB_COLL}?retryWrites=true&w=majority`

const connectToMongo = async () => {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });
    return "Success"
  }
  
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
        pokemonSample: async (_,{sampleSize, is_leg, generation, type1, type2, ability}) => {
            await connectToMongo();
            aggPipeLine = [];
            args = []
            args.push(
                ['is_legendary',is_leg],
                ['generation',generation],
                ['type1',type1],
                ['type2',type2],
                ['abilities',ability]
                )
            // aggPipeLine.push({'$match':Object.fromEntries(args.filter(item=>item[1]!=undefined))});
            console.log(args,args.filter(item=>item!=undefined))
            aggPipeLine.push({'$match':Object.fromEntries(args.filter(item=>item[1]!=''))})
            aggSample = {'$sample': {'size':sampleSize}};
            aggPipeLine.push(aggSample);
            console.log(aggPipeLine)
            aggregation = Pokemon.aggregate(aggPipeLine).exec();
            const agreg = await aggregation;
            return agreg
        }
    },
  };
  
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  exports.schema = schema;
  