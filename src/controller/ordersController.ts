import { NextFunction, Request, Response } from 'express';
import authService from '../services/authService';
import ordersService from '../services/ordersService';
import productsService from '../services/productsService';
import usersService from '../services/usersService';

const ordersController = {
  async getAll(req: Request, res:Response, _next: NextFunction) {
    const ordersList = await ordersService.getAll();
    return res.status(200).json(ordersList);
  },

  async add(req: Request, res:Response, _next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) throw new Error('Token not found');
    const { data } = await authService.validateToken(token);
    const { productsIds } = req.body;
    const validated = await ordersService.validateBody(productsIds);
    const userId = await usersService.get(data);
    const insertId = await ordersService.add(userId);
    await Promise.all(validated
      .map((productId: number) => productsService.update(insertId, productId)));
    const result = await ordersService.get(userId, insertId);
    return res.status(201).json(result);
  },
};

export default ordersController;