import { DiagnosticMessageValue } from '../diagnosticMessages'

/**
 * https://stackoverflow.com/a/16371896
 * @param str string String
 * @param arr values Array
 */
function formatMessage (str: string = '', arr: string[] = []) {
  return str.replace(/%(\d+)/g, (_, m) => {
    return arr[--m]
  })
}

export class ErrorProperties {
  public message = ''
  constructor (
    diagnosticMessage: DiagnosticMessageValue,
    public key: string,
    public replacer: string[]
  ) {
    this.message = formatMessage(diagnosticMessage.message, replacer)
  }
}
