import { gql } from "apollo-server-express";
import type { Context } from "../../types";
import { comparePassword, createJWT, hashPassword } from "../../utils";

export const userTypeDefs = gql`
  type User {
    id: ID! @id
    email: String! @unique
    username: String! @unique
    password: String! @private
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }

  extend type User
    @auth(
      rules: [
        { operations: [CONNECT], isAuthenticated: true }
        {
          operations: [UPDATE]
          allow: { id: "$jwt.sub" }
          bind: { id: "$jwt.sub" }
        }
        { operations: [DELETE], allow: { id: "$jwt.sub" } }
      ]
    )

  type Mutation {
    signUp(email: String!, username: String!, password: String!): String # JWT
    signIn(email: String!, password: String!): String # JWT
  }
`;

export const authResolvers = {
  Mutation: {
    signUp,
    signIn,
  },
};

interface SignUpInput {
  email: string;
  username: string;
  password: string;
}

async function signUp(_root: any, args: SignUpInput, context: Context) {
  const User = context.ogm.model("User");

  const [existing] = await User.find({
    where: { email: args.email },
    context: { ...context, adminOverride: true },
  });

  if (existing) {
    throw new Error("User with that email already exists");
  }

  const hash = await hashPassword(args.password);

  const [user] = (
    await User.create({
      input: [
        {
          email: args.email,
          username: args.username,
          password: hash,
        },
      ],
    })
  ).users;

  const jwt = await createJWT({ sub: user.id });

  return jwt;
}

interface SignInInput {
  email: string;
  password: string;
}

async function signIn(_root: any, args: SignInInput, context: Context) {
  const User = context.ogm.model("User");

  const [existing] = await User.find({
    where: { email: args.email },
    context: { ...context, adminOverride: true },
  });

  const unauthorizedError = new Error("Invalid password or email");

  if (!existing) {
    throw unauthorizedError;
  }

  const equal = await comparePassword(args.password, existing.password);
  if (!equal) {
    throw unauthorizedError;
  }

  const jwt = await createJWT({ sub: existing.id });

  return jwt;
}
