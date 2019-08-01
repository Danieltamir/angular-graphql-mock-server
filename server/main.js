"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var graphqlHTTP = require("express-graphql");
var cors = require("cors");
var graphql_tools_1 = require("graphql-tools");
var graphql_schema_1 = require("./graphql-schema");
/**Step 1 : Generating our schema!**/
var schema = graphql_tools_1.makeExecutableSchema({ typeDefs: graphql_schema_1.schemaTypes });
/**Step 2 : Adding mocks to the schema!**/
graphql_tools_1.addMockFunctionsToSchema({
    schema: schema,
    mocks: {}
});
var app = express();
/**Step 3 : Running the server with GraphiQL!!**/
app.use('/graphql', graphqlHTTP(function () { return ({
    schema: schema,
    graphiql: true,
    cors: cors
}); }));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
