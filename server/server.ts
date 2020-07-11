import express from 'express';
import schema from './database'
import path from 'path'
import { ApolloServer } from 'apollo-server-express'
import routes from './routes'

const server = new ApolloServer({
  schema,
});

const app = express();

app.use(express.static(path.normalize(__dirname + '/../public')));
app.use(routes);

server.applyMiddleware({ app, path: '/filter' });

app.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
});