import * as Validator from 'validator'
import { IResolvers } from 'graphql-tools'
import * as PostgresCodes from '@monorepo/common/build/constants/postgres'
// Entities
import { UserEntity } from '../entities/User'
// Services
import { HashPassword, ErrorResponse } from '../services'
import { DiagnosticMessages } from '../diagnosticMessages'
import { ErrorProperties } from '../services/ErrorProperties'

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
export const resolvers: IResolvers = {
  Query: {
    users: async () => {
      try {
        const users = await UserEntity.find({})

        return users
      } catch (err) {
        throw err
      }
    }
  },
  /**
   * * Mutation Root
   */
  Mutation: {
    /**
     * * Create a new user mutation
     */
    createUser: async (_, { email, username, password, name }) => {
      const errors = []

      try {
        if (password.length <= 3) {
          errors.push(
            new ErrorProperties(
              DiagnosticMessages['A field length is too short'],
              'password',
              ['3']
            )
          )
        }

        if (!Validator.isEmail(email)) {
          errors.push(
            new ErrorProperties(
              DiagnosticMessages['A field has some value error'],
              'email',
              ['Email']
            )
          )
        }

        if (errors.length) {
          throw new ErrorResponse(
            DiagnosticMessages['A field has some value error'],
            errors
          )
        }

        const hashedPassword = await HashPassword(password)
        const newUser = await UserEntity.create({
          email,
          username,
          password: hashedPassword,
          name
        })

        // Save the user
        await newUser.save()

        return newUser
      } catch (err) {
        if (err.code === PostgresCodes.UNIQUE_VIOLATION) {
          throw new ErrorResponse(DiagnosticMessages['The data is exist'])
        }

        throw err
      }
    }
  }
}
