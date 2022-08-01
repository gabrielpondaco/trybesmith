import { NextFunction, Request, Response } from 'express';
import ordersService from '../services/ordersService';

const ordersController = {
  async getAll(req: Request, res:Response, _next: NextFunction) {
    const ordersList = await ordersService.getAll();
    return res.status(200).json(ordersList);
  },
};

export default ordersController;