import { Router } from 'express';
import peopleRouter from './people';
import usersRouter from './users';

let router = Router();

router.use('/people', peopleRouter);
router.use('/users', usersRouter);

export default router;