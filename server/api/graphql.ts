
import { mongooseConnect } from "~/server/helpers/db-connect";
import resolvers from "../resolvers";
import { schema } from '#graphql/schema';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateH3Handler } from '@as-integrations/h3';

mongooseConnect();


const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    // plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    // uploads: false,
    // introspection: true,
    // playground: true,
});

// BUG: Doesn't work when deployed 
export default startServerAndCreateH3Handler(server, {})
