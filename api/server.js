// mongodb+srv://admin:c2pthQMtDkADQVi@cluster0.olxpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import typeDefs from "./schema.js";
import resolvers from "./resolvers/index.js";
import bodyParser from "body-parser";
import cors from "cors";
import { ApolloServer, Config, ExpressContext } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import { graphqlUploadExpress } from "graphql-upload";

const url =
  "mongodb+srv://admin:c2pthQMtDkADQVi@cluster0.olxpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();
const httpServer = http.createServer(app);

const apolloClient = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  uploads: false,
});

const startApolloServer = async () => {
  await apolloClient.start();

  app.use(bodyParser.json());
  app.use("*", cors());
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  // Mount Apollo middleware here.
  apolloClient.applyMiddleware({ app });
  // server.applyMiddleware({ app, path: "/specialUrl" });

  await new Promise((resolve) =>
    httpServer.listen({ port: 8000 }, () => resolve)
  );
  console.log(
    `🚀 Server ready at http://localhost:8000${apolloClient.graphqlPath}`
  );
  await mongoose.connect(url, { useNewUrlParser: true }).then(
    () => console.log("Connected correctly to server!"),
    (err) => console.log(err)
  );
  return { app };
};

startApolloServer();
