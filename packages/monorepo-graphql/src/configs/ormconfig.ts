import * as Path from 'path'
// Types
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

const EntitiesPath = Path.resolve(__dirname, '../entities')
const EntitiesGlob = Path.join(EntitiesPath, '/*.js')

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'monorepodb',
  synchronize: true,
  entities: [
    EntitiesGlob
  ]
} as PostgresConnectionOptions
