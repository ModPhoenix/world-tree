import { gql } from "apollo-server-express";

export const knowledgeTypeDefs = gql`
    type Knowledge {
        id: ID! @id
        name: String! @unique
        content: String!
        children: [Knowledge!]! @relationship(type: "LINK", direction: OUT)
        parents: [Knowledge!]! @relationship(type: "LINK", direction: IN)
        createdAt: DateTime @timestamp(operations: [CREATE])
        updatedAt: DateTime @timestamp(operations: [UPDATE])
    }
`;
