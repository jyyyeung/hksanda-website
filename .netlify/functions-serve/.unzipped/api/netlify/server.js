var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {value: true}), mod);
var server_exports = {};
__export(server_exports, {
    createLambdaServer: () => createLambdaServer,
    createLocalServer: () => createLocalServer,
    httpServer: () => httpServer
});
module.exports = __toCommonJS(server_exports);
var import_body_parser = __toESM(require("body-parser"), 1);
var import_cors = __toESM(require("cors"), 1);
var import_express = __toESM(require("express"), 1);
var import_apollo_server_lambda = require("apollo-server-lambda");
var import_resolvers = require("./resolvers/index.js");
var import_apollo_server_core = require("apollo-server-core");
var import_http = require("http");
var import_graphql_upload = require("graphql-upload");
var import_compression = __toESM(require("compression"), 1);
var import_apollo_server_express = require("apollo-server-express");
var import_path = __toESM(require("path"), 1);
var import_schema = require("./schema.js");
const app = (0, import_express.default)();
app.use("*", (0, import_cors.default)());
app.use(import_body_parser.default.json());
app.use((0, import_graphql_upload.graphqlUploadExpress)({maxFileSize: 1e7, maxFiles: 10}));
app.use((0, import_compression.default)());
app.use(import_express.default.static(import_path.default.dirname("/"), {dotfiles: "allow"}));
const staticFileMiddleware = import_express.default.static(import_path.default.dirname("/"), {dotfiles: "allow"});
app.use(staticFileMiddleware);
app.use(staticFileMiddleware);
const httpServer = (0, import_http.createServer)(app);
const createLambdaServer = () => new import_apollo_server_lambda.ApolloServer({
    typeDefs: import_schema.schema,
    resolvers: import_resolvers.resolvers,
    plugins: [(0, import_apollo_server_core.ApolloServerPluginDrainHttpServer)({httpServer})],
    csrfPrevention: true,
    uploads: false
});
const createLocalServer = () => new import_apollo_server_express.ApolloServer({
    typeDefs: import_schema.schema,
    resolvers: import_resolvers.resolvers,
    plugins: [(0, import_apollo_server_core.ApolloServerPluginDrainHttpServer)({httpServer})],
    uploads: false
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    createLambdaServer,
    createLocalServer,
    httpServer
});
