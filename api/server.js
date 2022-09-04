// mongodb+srv://admin:c2pthQMtDkADQVi@cluster0.olxpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
import express from "express";
import mongoose from "mongoose";
import typeDefs from "./schema.js";
import resolvers from "./resolvers/index.js";
import bodyParser from "body-parser";
import cors from "cors";
import {ApolloServer} from "apollo-server-express";
import {ApolloServerPluginDrainHttpServer} from "apollo-server-core";
import {createServer} from "http";
import {graphqlUploadExpress} from "graphql-upload";
import {dirname} from "path";
import {fileURLToPath} from "url";
// var helmet = require("helmet");
import compression from "compression";

const __dirname = dirname(fileURLToPath(import.meta.url));

const url =
    "mongodb+srv://admin:c2pthQMtDkADQVi@cluster0.olxpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

const httpServer = createServer(app);

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    uploads: false
});

async function startApolloServer() {
    await apolloServer.start();

    app.use(bodyParser.json());
    app.use("*", cors());
    app.use(graphqlUploadExpress({maxFileSize: 10000000, maxFiles: 10}));
    // app.use(require("prerender-node"));

    app.use(compression());
    // app.use(helmet());

    //app.use(express.static(__dirname, { dotfiles: "allow" }));

    // Middleware for serving '/dist' directory
    const staticFileMiddleware = express.static(__dirname, {dotfiles: "allow"});

    // 1st call for unredirected requests
    app.use(staticFileMiddleware);

    // Support history api
    // this is the HTTP request path not the path on disk
    //app.use(
    //history({
    //index: "/index.html",
    //})
    //);

    // 2nd call for redirected requests
    app.use(staticFileMiddleware);

    app.get("/sitemap.xml", function (req, res) {
        res.sendFile("/sitemap.xml", {root: "."});
    });

    // Mount Apollo middleware here.
    apolloServer.applyMiddleware({app});

    await new Promise((resolve) =>
        httpServer.listen({port: process.env.PORT || 8000}, resolve)
    );
    console.log(
        `🚀 Server ready at http://localhost:8000${apolloServer.graphqlPath}`
    );
    await mongoose.connect(url, {useNewUrlParser: true}).then(
        () => {
            console.log("Connected correctly to server!");
        },
        (err) => {
            console.log(err);
        }
    );
    return {app};
}

startApolloServer();

// const server = startApolloServer();
// const expressApp = server.app;
// console.log(expressApp);
// if (process.env.PROD) {
//   expressApp.listen(3000);
// }

// exports.viteNodeApp = expressApp;
