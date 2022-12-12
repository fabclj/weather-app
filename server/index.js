const { ApolloServer } = require('apollo-server');
const schema = require('./schema.js');
const dataSources = require('./dataSource.js');

const server = new ApolloServer({ schema, dataSources });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
