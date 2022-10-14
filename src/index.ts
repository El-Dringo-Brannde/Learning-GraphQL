import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import path from 'path';
import { resolvers } from './resolvers/book.js';

const server = new ApolloServer({
  typeDefs: readFileSync(path.resolve('./dist', './schemas/book.graphql'), {
    encoding: 'utf-8',
  }),
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
