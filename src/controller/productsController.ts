import { NextFunction, Request, Response } from 'express';
import { Products } from '../interfaces';
import productsService from '../services/productsService';

const productsController = {
  async add(req: Request, res:Response, _next: NextFunction) {
    const product = req.body as Products;
    const id = await productsService.add(product);
    const newProduct = {
      id,
      name: product.name,
      amount: product.amount,
    };
    return res.status(201).json(newProduct);
  },

  async getAll(req: Request, res:Response, _next: NextFunction) {
    const productsList = await productsService.getAll();
    return res.status(200).json(productsList);
  },
};

export default productsController;