import gql from 'graphql-tag';


export const addUser = gql`
  mutation addUser($user: UserInput) {
    addUser(input: $user) {
      successful
    }
  }
`;
