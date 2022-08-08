const typeDefs = require('./graphql/types')
const resolvers = require('./graphql/resolver')

const express = require('express')
const http = require('http')
const {ApolloServer} = require('apollo-server-express')
const {ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault} = require('apollo-server-core')

async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
            ApolloServerPluginDrainHttpServer({httpServer}),
            ApolloServerPluginLandingPageLocalDefault({embed: true}),
        ],
    });

    await server.start();
    server.applyMiddleware({
        app,
        path: '/'
    });

    await new Promise(resolve => httpServer.listen({port: 4000}, resolve));
    console.log(`Listening on http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers)
.catch((err) => console.log("server could not start because: " + err))