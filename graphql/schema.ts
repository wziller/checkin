import { gql } from "@apollo/client";

export const typeDefs = gql`
  scalar DateTime

  type Check {
    id: String!
    title: String!
    context: String
    public: Boolean!
    author: User
  }

  type User {
    id: String!
    name: String
    email: String
    emailVerified: DateTime
    image: String
    checks: [Check!]!
    public: Boolean!
    friends: [User!]!
    friendOf: [User!]!
  }


  type Query {
    users: [User!]!
    user(id: String!): User
    checks: [Check!]!
    check(id: String!): Check
  }
`;