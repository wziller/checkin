import { gql } from "@apollo/client";

export const UPDATE_CHECK = gql`
  mutation UpdateCheck($input: CheckInput!) {
    updateCheck(input: $input) {
      action
      body
      createdAt
      description
      grateful
      id
      image
      physical
      public
      reaction
      thoughts
      response
      title
      trigger
      updatedAt
      userId
      word
    }
  }
`;