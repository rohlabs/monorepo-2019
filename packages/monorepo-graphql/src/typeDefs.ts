import { gql } from 'apollo-server'

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
export const typeDefs = gql`
  type User {
    id: ID
    email: String
    name: String
    username: String
  }

  # Query types
  type Query {
    users: [User]
  }

  # Mutation types
  type Mutation {
    createUser(
      email: String!,
      name: String!,
      username: String!,
      password: String!
    ): User
  }
`
