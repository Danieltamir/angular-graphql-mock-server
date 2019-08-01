export const schemaTypes = `

  ## Queries! 
  ## =========================================
  
  type Query {
    users: [User]
    getUserById(id: ID!): User
  }
  
  type User {
    id: ID
    firstName: String
    lastName: String
    age: Int
  } 

  ## Mutations! 
  ## =========================================
  
  type Mutation {
    addNewUser(input: UserInput): MutationResult!
  }
  
  input UserInput {
    firstName: String!
    lastName: String
    age: Int
  } 
  
  type MutationResult {
    successful: Boolean
  }
`;
