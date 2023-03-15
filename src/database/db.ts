import { Pool } from 'pg';
import { TDatabaseOpts } from './types';


export default async function dbConnection(opts?: TDatabaseOpts) {
  const logger = opts?.logger || false;
  const host = opts?.host || process.env.DB_HOST || 'localhost';
  const port = opts?.port || parseInt(process.env.DB_PORT || "", 10) ||5432;
  const user = opts?.user || process.env.DB_USER ||'postgres';
  const password = opts?.password || process.env.DB_PASSWORD ||'1029'

  const pool = new Pool({ host, port, user, password });
  await pool.connect()

  pool.query(`SELECT datname FROM pg_database WHERE datname = 'test'`).then((res) => {
    // If the database doesn't exist, create it
    if (res.rowCount === 0) {
      pool.query(`CREATE DATABASE test`)
        .then((res) => {
          if (logger) console.log('Database created')
        })
        .catch((err) => console.error('Error creating database', err))
        .finally(() => pool.end());
    } else {
      // If the database exists, log a message
      if (logger) console.log('Database already exists');
      pool.end();
    }
  })
  .catch(err => console.error('Error checking database existence', err));
  return pool;
}