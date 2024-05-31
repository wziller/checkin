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

export const DELETE_CHECK = gql`
  mutation Mutation($deleteCheckId: String!) {
    deleteCheck(id: $deleteCheckId) {
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
      updatedAt
      createdAt
    }
  }
`;

export const CREATE_CHECK = gql`
  mutation Mutation($input: AddCheckInput!) {
    createCheck(input: $input) {
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
      updatedAt
      createdAt
    }
  }
`;
