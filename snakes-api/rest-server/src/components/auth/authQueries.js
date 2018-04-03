import db from '../../config/database';
import { signUpHelper, loginHelper, insertHelper } from './authSQLHelpers';
import { success, error } from '../../lib/log';

export const signUpQuery = async body => {
  try {
    const queryString = signUpHelper(body);
    await db.queryAsync(queryString);
    const insertString = insertHelper('users');
    const data = await db.queryAsync(insertString);
    success(`signUpQuery - successfully inserted data ${JSON.stringify(data)}`);
    return data;
  }
  catch (err) {
    error(`signUpQuery - error: ${err}`);
  }
};

export const loginQuery = async body => {
  try {
    const queryString = loginHelper(body);
    const data = await db.queryAsync(queryString);
    success(`loginQuery - successfully retrieved data ${JSON.stringify(data)}`);
    return data;
  }
  catch (err) {
    error(`loginQuery - error: ${err}`);
  }
};