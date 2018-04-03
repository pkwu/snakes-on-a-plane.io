import db from '../../config/database';
import { signUpQuery, loginQuery } from './authQueries';
import { success, error } from '../../lib/log';
// import generateToken
// import hashPassword, comparePasswords

export const signUpController = async (req, res) => {
  try {
    console.log('here is req body ', req.body);
    const rows = await signUpQuery(req.body);
    // const { id, username } = rows[0];
    success(`signUpController - successfully retrieved data: ${JSON.stringify(rows[0])}`);
    // generate and assign token
    return res
      .status(200)
      // set token
      // expose headers
      .send(rows[0]);
  }
  catch (err) {
    error(`signUpController - error: ${err}`);
    return res
      .status(400)
      .send(err);
  }
};

export const loginController = async (req, res) => {
  try {
    const { rows } = await loginQuery(req.body);
    if (rows.length === 0) return res.status(500).send();
    delete rows[0].password;
    const { id, username } = rows[0];
    success(`loginController - successfully retrieved data: ${JSON.stringify(rows[0])}`);
    // generate and assign token
    return res
      .status(200)
      // set token
      // expose headers
      .send(rows[0]);
  }
  catch (err) {
    error(`loginController - error: ${err}`);
    return res.status(204).send();
  }
}