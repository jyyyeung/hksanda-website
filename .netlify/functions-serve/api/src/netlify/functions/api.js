import {createLambdaServer} from "../server.js";
import {mongooseConnect} from "../db-connect.js";


const getHandler = (event, context) => {
    mongooseConnect()
    const server = createLambdaServer();

    const graphqlHandler = server.createHandler();
    if (!event.requestContext) {
        event.requestContext = context;
    }
    return graphqlHandler(event, context);
}

export {getHandler as handler}
