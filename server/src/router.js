import * as express from 'express';
import { authRouter } from './routes';

const router = express.Router();

router.use('/auth', authRouter);

export default router;
