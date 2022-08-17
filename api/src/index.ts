import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer, gql } from "apollo-server";
import neo4j from "neo4j-driver";
import { knowledgeTypeDefs, UserTypeDefs } from "./gql";
import { NEO_PASSWORD, NEO_URL, NEO_USER } from "./settings";

export const driver = neo4j.driver(NEO_URL, neo4j.auth.basic(NEO_USER, NEO_PASSWORD));

const neoSchema = new Neo4jGraphQL({ typeDefs: [UserTypeDefs, knowledgeTypeDefs], driver });

neoSchema.getSchema().then((schema: any) => {
  const server = new ApolloServer({
      schema,
  });

  server.listen().then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
  });
})