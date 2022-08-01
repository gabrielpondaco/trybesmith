import { Router } from 'express';
import ordersController from '../controller/ordersController';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.getAll);

export default ordersRouter;