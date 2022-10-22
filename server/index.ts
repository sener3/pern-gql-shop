import 'dotenv/config';
import { createServer } from 'http';
import express from "express";

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { useServer } from 'graphql-ws/lib/use/ws';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

async function startApolloServer(typeDefs: any, resolvers: any) {
  const app = express();
  
  const httpServer = createServer(app);
  
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/subscriptions',
  });
  
  const serverCleanup = useServer({ schema }, wsServer);
  
  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

startApolloServer(typeDefs, resolvers);