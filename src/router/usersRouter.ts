import { Router } from 'express';
import usersController from '../controller/usersController';

const usersRouter = Router();

usersRouter.post('/', usersController.add);

export default usersRouter;