var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, {get: all[name], enumerable: true});
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
    }
    return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {value: true}), mod);
var api_exports = {};
__export(api_exports, {
    handler: () => getHandler
});
module.exports = __toCommonJS(api_exports);
var import_server = require("../server.js");
var import_db_connect = require("../db-connect.js");
const getHandler = (event, context) => {
    (0, import_db_connect.mongooseConnect)();
    const server = (0, import_server.createLambdaServer)();
    const graphqlHandler = server.createHandler();
    if (!event.requestContext) {
        event.requestContext = context;
    }
    return graphqlHandler(event, context);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    handler
});
