export interface DiagnosticMessageValue {
  code: number
  message?: string
  replacer?: string[]
}

export const DiagnosticMessages = {
  // Form validation
  'A field has some value error': {
    code: 1002,
    message: '%1 tidak valid'
  },
  'A field type does not meet spec': {
    code: 1003,
    message: 'Tipe data "%1" seharusnya %2'
  },
  'A field length is too short': {
    code: 1004,
    message: 'Jumlah karakter tidak boleh kurang dari %1'
  },

  // Database connection
  'The data is exist': {
    code: 2000,
    message: 'Data sudah ada'
  }
}
