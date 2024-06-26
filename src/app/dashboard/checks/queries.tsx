import { gql } from "@apollo/client";

export const GET_USER_CHECKS = gql`
  query Query($userId: String!) {
    checksByUserId(userId: $userId) {
      id
      title
      word
      image
      description
      body
      trigger
      reaction
      response
      physical
      thoughts
      action
      grateful
      public
      userId
      user {
        name
        image
      }
      updatedAt
      createdAt
    }
  }
`;