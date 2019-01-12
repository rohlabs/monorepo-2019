/**
 * Create new type that makes optionable
 */
export type Optional<T> = { [P in keyof T]?: T[P] }
