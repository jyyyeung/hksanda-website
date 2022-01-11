// mongodb+srv://admin:c2pthQMtDkADQVi@cluster0.olxpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const express = require("express");
const mongoose = require("mongoose");
const typeDefs = require("./schema.js");
const resolvers = require("./resolvers/index");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
var http = require("http");
const { graphqlUploadExpress } = require("graphql-upload");

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

async function startApolloServer() {
  await apolloClient.start();

  app.use(bodyParser.json());
  app.use("*", cors());
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  // Mount Apollo middleware here.
  apolloClient.applyMiddleware({ app });
  // server.applyMiddleware({ app, path: "/specialUrl" });

  await new Promise((resolve) => httpServer.listen({ port: 8000 }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:8000${apolloClient.graphqlPath}`
  );
  await mongoose.connect(url, { useNewUrlParser: true }).then(
    () => {
      console.log("Connected correctly to server!");
    },
    (err) => {
      console.log(err);
    }
  );
  return { app };
}
startApolloServer();
