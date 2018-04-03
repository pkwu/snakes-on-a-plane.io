import express from 'express';
// import express validation
// import passport 

import { signUpController, loginController } from './authControllers';
// import formvalidation
// import passport setup

const router = express.Router();

router
  .route('/signup')
  .post(signUpController);
  // .post(
  //   validate(formValidation.signUp), 
  //   signUpController
  // );

router
  .route('/login')
  .post(loginController);
  // .post(
  //   validate(formValidation.login),
  //   passport.authenticate('local', { session: false }),
  //   loginController
  // );

export default router;