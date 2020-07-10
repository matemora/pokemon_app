// require('dotenv').config({ path: './pokemon_app/.env' })
const express = require('express');
const { typeDefs, resolvers } = require('./database')
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { routes } = require('./routes')

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(express.static(path.normalize(__dirname + '/../public')));
app.use(routes);

server.applyMiddleware({ app, path: '/filter' });

app.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
});