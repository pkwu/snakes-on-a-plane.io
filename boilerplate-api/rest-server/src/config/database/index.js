require('dotenv').config();

import mysql from 'mysql';
import Promise from 'bluebird';

import {
  success,
  error
} from '../../lib/log';

const config = {
  connectionLimit: 20,
  user: process.env.NODE_ENV === 'production' ? process.env.AWS_USER : process.env.LOCAL_USER,
  host: process.env.NODE_ENV === 'production' ? process.env.AWS_HOST : process.env.LOCAL_HOST,
  database: process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE,
  password: process.env.NODE_ENV === 'production' ? process.env.AWS_PASSWORD : process.env.LOCAL_PASSWORD
};

// const db = mysql.createConnection(config);
const db = mysql.createPool(config);

Promise.promisifyAll(db);

db.queryAsync('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('mySQL queries connected: ', results[0].solution === 2);
});

export default db;