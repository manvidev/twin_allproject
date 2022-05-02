const { ApolloServer } = require("apollo-server")
const { typeDefs } = require("./schema/type-defs")
const { resolvers } = require("./schema/resolvers")

// server create
const server = new ApolloServer({
    typeDefs, resolvers, context: ({ req },) => {
        return { req }
    }
})

server.listen().then(({ url }) => {
    console.log(`ur API is running ${url}`);
})