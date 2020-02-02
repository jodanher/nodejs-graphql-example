const { ApolloServer } = require('apollo-server')
const db = require('./data/mysql')

const { importSchema } = require('graphql-import')
const typeDefs = importSchema('./schema/index.graphql')

const resolvers = require('./resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando ${url} stage ${process.env.STAGE}`)
})