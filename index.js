import { ApolloServer } from "apollo-server";
import Mutation from "./resolvers/Mutation"
import Query from "./resolvers/Query";
import connectDb from "./db/connectDb";
import path from 'path'
import { readFileSync } from "fs";
const schemaSdl = readFileSync(path.join(__dirname, "./schema.graphql"), "utf-8") 
const server = new ApolloServer({
    typeDefs:schemaSdl,
    resolvers:{
        Query,
        Mutation
    }
});
connectDb();
server.listen().then(({url})=>{
    console.log("Server is running ar port " + url)
});