import { gql } from "@apollo/client";

export const GET_USER_CHECKS = gql`
  query Query($userId: ID!) {
    user(id: $userId) {
      checks {
        id
        title
        word
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
      }
    }
  }
`;