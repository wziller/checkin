import { gql } from "@apollo/client";

export const typeDefs = gql`
  scalar DateTime
  type Check {
    id: String!
    title: String!
    word: String!
    description: String!
    body: String!
    trigger: String
    reaction: String
    response: String
    physical: String!
    thoughts: String!
    action: String!
    grateful: String!
    public: Boolean!
    userId: String!
    user: User
  }

  type User {
    id: String!
    name: String
    email: String
    emailVerified: DateTime
    image: String
    checks: [Check]
    public: Boolean!
    friends: [User!]!
    friendOf: [User!]!
  }

  type Query {
    allUsers:[User]
    user(id:ID!):User
  }

  type Mutation {
    createCheck(input: CheckInput!): Check
    updateCheck(id: String!, input: CheckInput!): Check
    deleteCheck(id: String!): Check
    createUser(input: UserInput!): User
    updateUser(id: String!, input: UserInput!): User
    deleteUser(id: String!): User
  }

  input CheckInput {
    title: String!
    word: String!
    description: String!
    body: String!
    trigger: String
    reaction: String
    response: String
    physical: String!
    thoughts: String!
    action: String!
    grateful: String!
    public: Boolean!
    userId: String!
  }

  input UserInput {
    name: String
    email: String
    emailVerified: DateTime
    image: String
    public: Boolean!
    friendIds: [String!]!
  }
`;