import { gql } from '@apollo/client';


export const GET_A_USERS_BOOKMARKS = gql`
query GetAUsersBookmarks($id: ID) {
  getAUsersBookmarks(_id: $id) {
    bookmarks {
      description
      url
      category
    }
  }
}

`;