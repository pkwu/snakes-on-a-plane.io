require('dotenv').config();

import db from '../../config/database';
import { success, error } from '../log';

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;

// export const createDatabase = async () => {
//   try {
//     await db.queryAsync(
//       `CREATE DATABASE ${database}`
//     );
//     success(`successfully created database ${database}`);
//   } catch (err) {
//     error(`error creating database ${err}`);
//   }
// };

// export const dropDatabase = async () => {
//   try {
//     await db.queryAsync(
//       `DROP DATABASE IF EXISTS ${database}`
//     );
//     success(`successfully dropped database ${database}`);
//   } catch (err) {
//     error(`error dropping database ${err}`);
//   }
// };

export const createUserTable = async () => {
  try {
    await db.queryAsync(
      `CREATE TABLE users 
      (
        username VARCHAR(20) NOT NULL, 
        email VARCHAR(30) NOT NULL, 
        password VARCHAR(30) NOT NULL, 
        first VARCHAR(20) NOT NULL, 
        last VARCHAR(20) NOT NULL,
        type CHAR(1) NOT NULL,
        created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
      `
    );
    success('successfully created users table');
  } 
  catch (err) {
    error(`error creating users table ${err}`);
  }
};

export const dropUserTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS users`
    );
    success('successfully dropped users table');
  }
  catch (err) {
    error(`error dropping users table ${err}`);
  }
}