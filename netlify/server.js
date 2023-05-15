import bodyParser from "body-parser";

import cors from "cors";

import express from "express";

import {ApolloServer as ApolloServerLambda} from 'apollo-server-lambda';
import {resolvers} from "./resolvers/index.js";

import {ApolloServerPluginDrainHttpServer} from "apollo-server-core";

import {createServer} from "http";

import {graphqlUploadExpress} from "graphql-upload";

import compression from "compression";
import {ApolloServer} from "apollo-server-express";
import path from "path";
import {readFileSync} from 'fs';

const app = express();

app.use("*", cors());
app.use(bodyParser.json());

app.use(graphqlUploadExpress({maxFileSize: 10000000, maxFiles: 10}));
// app.use(require("prerender-node"));

app.use(compression());
// app.use(helmet());

app.use(express.static(path.dirname('/'), {dotfiles: "allow"}));

// Middleware for serving '/dist' directory
const staticFileMiddleware = express.static(path.dirname('/'), {dotfiles: "allow"});

// 1st call for unredirected requests
app.use(staticFileMiddleware);

// 2nd call for redirected requests
app.use(staticFileMiddleware);

// app.get("/sitemap.xml", function (req, res) {
//     res.sendFile("/sitemap.xml", {root: "."});
// });


export const httpServer = createServer(app);

const typeDefs = readFileSync('netlify/schema.graphql', {encoding: 'utf-8'});

export const createLambdaServer = () => new ApolloServerLambda({
    typeDefs: typeDefs,
    resolvers: resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    csrfPrevention: true,
    uploads: false,
    // introspection: true,
    // playground: true,
});


export const createLocalServer = () => new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    uploads: false,
    // introspection: true,
    // playground: true,
});

