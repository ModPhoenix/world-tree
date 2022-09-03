import { Neo4jGraphQL } from "@neo4j/graphql";
import { OGM } from "@neo4j/graphql-ogm";
import { Neo4jGraphQLAuthJWTPlugin } from "@neo4j/graphql-plugin-auth";
import { ApolloServer } from "apollo-server";
import { driver } from "../neo4j";
import { NEO4J_GRAPHQL_JWT_SECRET } from "../settings";
import { Context } from "../types";

import { knowledgeTypeDefs } from "./knowledge";
import { authResolvers, userTypeDefs } from "./user";

const typeDefs = [userTypeDefs, knowledgeTypeDefs];

export const resolvers = {
  ...authResolvers,
};

export const ogm = new OGM({
  typeDefs,
  driver,
});

export async function getServer(): Promise<ApolloServer> {
  await ogm.init();

  const neoSchema = new Neo4jGraphQL({
    driver,
    typeDefs,
    resolvers,
    plugins: {
      auth: new Neo4jGraphQLAuthJWTPlugin({
        secret: NEO4J_GRAPHQL_JWT_SECRET,
      }),
    },
  });

  const schema = await neoSchema.getSchema();
  await neoSchema.assertIndexesAndConstraints({ options: { create: true } });

  const server: ApolloServer = new ApolloServer({
    schema,
    context: ({ req }) => ({ ogm, driver, req } as Context),
  });

  return server;
}
