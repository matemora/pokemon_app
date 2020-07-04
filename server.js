require('dotenv').config({ path: './pokemon_app/.env' })
const express = require('express');
const path = require('path');
// const router = express.Router();
const app = express();
const filters = require('./abilities')
const mongoose = require('mongoose');
const Pokemon = require('./Pokedex').pok

const uri = `mongodb+srv://${process.env.DB_USR}:${process.env.DB_PASS}@cluster0-9aerh.gcp.mongodb.net/${process.env.DB_COLL}?retryWrites=true&w=majority`

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/listOptions', (req, res) => {
  res.send({
    abilities: filters.abilities,
    generation: filters.generation,
    type: filters.type
  });
});

const connectToMongo = async function () {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
  });
  return "Success"
}

app.get('/filter', async (req, res) => {
  const is_leg = req.query.is_leg=='true';
  const response = {
    generation: Number(req.query.generation),
    type1: req.query.type1,
    type2: req.query.type2,
    abilities: req.query.ability
  }
  aggPipeLine = [];
  aggSample = {'$sample':{'size':10}}
  aggFiltered = Object.entries(response).filter(([key,value])=>(value!=""));
  aggMatch = (args) => {
    args.push(['is_legendary',is_leg])
    aggPipeLine.push({'$match':Object.fromEntries(args)});
    }
  aggMatch(aggFiltered);
  aggPipeLine.push(aggSample);

  await connectToMongo();
  console.log(aggPipeLine);
  aggregation = Pokemon.aggregate(aggPipeLine).exec();
  aggregation.then(response=>{
    res.send(response)
  })
  aggregation.catch(err=>{
    console.log(err)
  });


});

// app.use('/', router);
app.use(express.static(__dirname + '/public'));

app.listen(3001);