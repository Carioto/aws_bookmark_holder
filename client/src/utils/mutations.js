import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }

`;

export const NEW_USER = gql `
mutation AddUser($firstName: String, $lastName: String, $username: String, $password: String) {
  addUser(firstName: $firstName, lastName: $lastName, username: $username, password: $password) {
  firstName
  lastName
  password
  username  
  }
}
`;

export const ADD_A_BOOKMARK = gql `
mutation AddBookmark($id: ID, $url: String, $description: String, $category: String) {
  addBookmark(_id: $id, url: $url, description: $description, category: $category) {
    url
    description
  }
}
`;