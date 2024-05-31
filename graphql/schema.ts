import { gql } from "@apollo/client";

export const typeDefs = gql`
  scalar DateTime
  type Check {
    id: String!
    title: String!
    word: String!
    image: String
    description: String!
    body: String!
    trigger: String!
    reaction: String!
    response: String!
    physical: String!
    thoughts: String!
    action: String!
    grateful: String!
    public: Boolean!
    userId: String!
    user: User
    updatedAt: DateTime
    createdAt: DateTime
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
    allUsers: [User]
    user(id: ID!): User
    checkById(checkId: String!): Check
    checksByUserId(userId: String!): [Check!]!
  }

  type Mutation {
    createCheck(input: AddCheckInput!): Check
    updateCheck(input: CheckInput!): Check
    deleteCheck(id: String!): Check
    createUser(input: UserInput!): User
    updateUser(id: String!, input: UserInput!): User
    deleteUser(id: String!): User
  }

  input AddCheckInput {
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
    title:String!
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
