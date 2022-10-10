var express = require('express');
var { graphqlHTTP } = require('express-graphql');
const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const RandomDie = require('./resolvers/die');

const schema = loadSchemaSync('./schemas/die.graphql', {
  loaders: [new GraphQLFileLoader()],
});

// The root provides the top-level API endpoints
var root = {
  getDie: ({ numSides }) => {
    return new RandomDie(numSides || 6);
  },
};

var app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
``;
