import * as Bcrypt from 'bcrypt'

/**
 * You know salt? yeah it's salty
 */
const SALT = 10

/**
 * Hashing password
 * @param password Password string to hash
 */
export async function HashPassword (password: string) {
  const hashedPassword = await Bcrypt.hash(password, SALT)
  return hashedPassword
}
