
import { mongooseConnect } from "~/server/helpers/db-connect";
import resolvers from "~/server/resolvers/index";
import { schema } from "#graphql/schema";
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from '@as-integrations/h3'

mongooseConnect()


const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

// BUG: Doesn't work when deployed 
export default startServerAndCreateH3Handler(server, {})
