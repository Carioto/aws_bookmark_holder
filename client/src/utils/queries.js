import { gql } from "@apollo/client";

export const GET_A_USERS_BOOKMARKS = gql`
  query GetBookmarks($username: ID) {
    getAUsersBookmarks(username: $username) {
      url
      category
      description
      _id
    }
  }
`;
