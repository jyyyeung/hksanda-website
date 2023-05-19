// /*
//  * @Author: YYYeung
//  * @Github: https://github.com/sheepyy039
//  * @Date: 2022-01-12 15:48:44
//  * @LastEditors: YYYeung
//  * @LastEditTime: 2022-01-17 18:05:20
//  * @FilePath: /hksanda-website/src/apollo/lambda.js
//  * @Description: apollo client
//  */

// import {InMemoryCache} from "@apollo/client/core";
// import {createApolloProvider} from "@vue/apollo-option";
// import {createUploadLink} from "apollo-upload-client";
// import ApolloClient, {ApolloLink} from "apollo-boost";
// //const cache = new InMemoryCache();
// // import { HttpLink } from "apollo-link-http";

// // const httpLink = new HttpLink({
// //   uri: process.env.VUE_APP_GRAPHQL_ENDPOINT,
// // });

// let baseURL;
// console.log(process.env.NODE_ENV);


// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
//     baseURL = "http://localhost:8000";
// } else {
//     baseURL = "/.netlify/functions";
// }

// // TODO: API endpoint not up to date on heroku
// const apolloClient = new ApolloClient({
//     cache: new InMemoryCache({
//         addTypename: false
//     }),
//     // uri: httpLink,
//     uri: baseURL + "/api",
//     link: ApolloLink.from([
//         createUploadLink({
//             uri: baseURL + "/api"
//             // uri: httpLink,
//         })
//     ])
// });

// export const apolloProvider = createApolloProvider({
//     defaultClient: apolloClient,
//     cache: new InMemoryCache({
//         addTypename: false
//     }),
//     connectToDevTools: true
// });
