require('dotenv').config();

import mysql from 'mysql';
import Promise from 'bluebird';

import {
  success,
  error
} from '../../lib/log';

const config = {
  user: process.env.NODE_ENV === 'production' ? process.env.AWS_USER : process.env.LOCAL_USER,
  host: process.env.NODE_ENV === 'production' ? process.env.AWS_HOST : process.env.LOCAL_HOST,
  database: process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE,
  password: process.env.NODE_ENV === 'production' ? process.env.AWS_PASSWORD : process.env.LOCAL_PASSWORD
};

const db = mysql.createConnection(config);

db.on('connect', () => {
  success(`successfully connected to mysql ${config.database}`);
});

db.on('remove', client => {
  success(`successfully removed client= ${client}`)
});

db.on('error', err => {
  error(`error in pg ${err}`);
});

db.connect();


Promise.promisifyAll(db);

db.queryAsync('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('mySQL queries connected: ', results[0].solution === 2);
});

export default db;