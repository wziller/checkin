import { gql } from "@apollo/client";

export const GET_CHECK_BY_ID = gql`
  query Query($checkId: String!) {
    checkById(checkId: $checkId) {
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
