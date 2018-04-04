import express from 'express';

import authRouter from '../components/auth/authRouter';
import articleRouter from '../components/article/articleRouter';

const router = express.Router();

router.use('/auth', authRouter);
// router.use('/article', articleRouter);

export default router;