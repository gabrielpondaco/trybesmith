import { Router } from 'express';
import productsController from '../controller/productsController';

const productsRouter = Router();

productsRouter.post('/', productsController.add);
// productsRouter.get('/', productsController.getAll);

export default productsRouter;