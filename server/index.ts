import "dotenv/config";
import cors from "cors";
import path from "path";
import express from "express";

import { ApolloServer } from "apollo-server-express";
import { graphqlUploadExpress } from "graphql-upload-ts";

import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

async function startApolloServer(typeDefs: any, resolvers: any) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  const app = express();
  app.use(cors());
  app.use("/images", express.static(path.join(__dirname, "images")))
  app.use(graphqlUploadExpress({ maxFileSize: 10 * 1024 * 1024, maxFiles: 10 }));

  await server.start();
  
  server.applyMiddleware({
    app,
    path: "/",
    cors: false,
  })

  app.listen({ port: 4000 })

  console.log(`🚀  Server ready at: http://localhost:4000`);
}

startApolloServer(typeDefs, resolvers);