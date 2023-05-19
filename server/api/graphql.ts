
import { mongooseConnect } from "~/server/helpers/db-connect";

// import bodyParser from "body-parser";

import cors from "cors";

import express from "express";

import resolvers from "../resolvers";

import { createServer } from "http";

import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";

import compression from "compression";
import path from "path";
import { schema } from '#graphql/schema'

import { ApolloServer } from '@apollo/server'

import { startServerAndCreateH3Handler } from '@as-integrations/h3'


const app = express();

mongooseConnect();

export const httpServer = createServer(app);


const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    // plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    uploads: false,
    // introspection: true,
    // playground: true,
});

app.use("*", cors());
// app.use(bodyParser.json());

app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
// app.use(require("prerender-node"));

app.use(compression());
// app.use(helmet());

app.use(express.static(path.dirname('/'), { dotfiles: "allow" }));

// Middleware for serving '/dist' directory
const staticFileMiddleware = express.static(path.dirname('/'), { dotfiles: "allow" });

// 1st call for unredirected requests
app.use(staticFileMiddleware);

// 2nd call for redirected requests
app.use(staticFileMiddleware);

export default startServerAndCreateH3Handler(server, {})
