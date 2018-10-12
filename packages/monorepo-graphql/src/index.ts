import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { createConnection } from 'typeorm'
// Apollo GraphQL
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'
// Configs
import ormConfig from './configs/ormconfig'

async function startServer () {
  // Create a typeorm connection
  await createConnection(ormConfig)

  // In the most basic sense, the ApolloServer can be started
  // by passing type definitions (typeDefs) and the resolvers
  // responsible for fetching the data for those types.
  const server = new ApolloServer({
    typeDefs,
    resolvers,

    formatError: (error: any) => {
      return {
        code: error.originalError && error.originalError.code,
        message: error.message,
        properties: error.originalError && error.originalError.properties
      }
    }
  })

  // This `listen` method launches a web-server.  Existing apps
  // can utilize middleware options, which we'll discuss later.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
}

startServer()
