const { ApolloServer } = require("apollo-server"); //apollo server er instance
const typeDefs = require("./schema"); //schema ta amra server e pass korbo ei typeDefs constant er maddhome(etai science)

const server = new ApolloServer({ typeDefs });

server.listen().then(() => {
  console.log("Server is running on port 4000");
});
