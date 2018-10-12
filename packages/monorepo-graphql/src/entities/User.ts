import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'
// Constants
import { TableName } from '../constants'

@Entity(TableName.USERS)
export class UserEntity extends BaseEntity {

  /**
   * User ID
   */
  @PrimaryGeneratedColumn('uuid')
  public id: string

  /**
   * User name
   */
  @Column({
    length: 100,
    default: ''
  })
  public name: string

  /**
   * User e-mail
   */
  @Column({
    length: 100,
    nullable: false,
    unique: true
  })
  public email: string

  /**
   * User username
   */
  @Column({
    length: 100,
    nullable: false,
    unique: true
  })
  public username: string

  /**
   * User Password
   * This column save bcrypt hash.
   */
  @Column({
    length: 72,
    nullable: false
  })
  public password: string

  /**
   * User isDeleted
   * This column prevent to delete a user data from table.
   */
  @Column({
    nullable: false,
    default: false
  })
  public isDeleted: boolean

  /**
   * User isActive
   * Indicates that user is still active or nonactive.
   * For some reason sometime user is in state inactive.
   */
  @Column({
    nullable: false,
    default: true // Indicates if user is active or not.
  })
  public isActive: boolean

  /**
   * User isVerified
   * Confirm that user is real.
   * This column can be true if user already verified their identity
   * by e-mail or phone
   */
  @Column({
    nullable: false,
    default: true // In production is should be `false`.
  })
  public isVerified: boolean
}
