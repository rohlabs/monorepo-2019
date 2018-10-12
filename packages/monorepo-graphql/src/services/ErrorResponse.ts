import { GraphQLError } from 'graphql'
import {
  DiagnosticMessageValue,
  DiagnosticMessages
} from '../diagnosticMessages'
import { ErrorProperties } from './ErrorProperties'

/**
 * https://stackoverflow.com/a/28191966
 * @param object
 * @param value
 */
function getKeyByValue (object: any, value: number) {
  return Object.keys(object).find((key) => object[key].code === value)
}

export class ErrorResponse extends GraphQLError {
  public properties: any
  public code: number

  constructor (
    public diagnosticMesssage: DiagnosticMessageValue,
    public errors: ErrorProperties[] = []
  ) {
    super(getKeyByValue(DiagnosticMessages, diagnosticMesssage.code) || '')

    this.code = diagnosticMesssage.code

    this.properties = errors.reduce((result, error) => {
      if (Object.prototype.hasOwnProperty.call(result, error.key)) {
        result[error.key].push(error.message)
      } else {
        result[error.key] = [error.message]
      }

      return result
    }, {})
  }
}
