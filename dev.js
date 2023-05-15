import {createLocalServer, httpServer} from "./netlify/server.js";
import consola from "consola";
import {mongooseConnect} from "./netlify/db-connect.js";


const server = createLocalServer();

server.start().then((resolve) => {
    mongooseConnect()

    // Mount Apollo middleware here.
    httpServer.listen({port: process.env.PORT || 9998}, resolve)

    consola.log(
        // `🚀 Server ready at http://localhost:8000${apolloServer.graphqlPath}`
        `🚀 Server ready at http://localhost:8000`
    );

    // consola.log(`🚀 Server ready at ${res}`);
});

