import { Router } from 'express';
import peopleRouter from './people';
import usersRouter from './users';
import blogListRouter from './blogList';

let router = Router();

router.use('/people', peopleRouter);
router.use('/users', usersRouter);
router.use('/blogList', blogListRouter);

export default router;