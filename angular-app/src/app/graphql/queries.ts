import gql from 'graphql-tag';

export const getAllUsers = gql`
  query users {
    users {
      id
      firstName
      lastName
      age
    }
  }
`;

export const getUserById = gql`
  query getUserById($userId: ID!) {
    getUserById(id: $userId) {
      firstName
      lastName
      age
      alive
      locationInfo {
        address
        city
        country
        postalCode
      }
    }
  }
`;
