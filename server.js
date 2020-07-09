// require('dotenv').config({ path: './pokemon_app/.env' })
const express = require('express');
const schema = require('./graphQLsetup').schema
const bodyParser = require('body-parser');
const path = require('path');
const { graphqlExpress } = require('apollo-server-express');
const filters = require('./abilities')

const app = express();

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

app.use('/filter', bodyParser.json(), graphqlExpress({ schema }));

app.use(express.static(__dirname + '/public'));

app.listen(3001,() => {
  console.log('Server running at http://localhost:3001');
});