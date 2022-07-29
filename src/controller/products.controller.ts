import { NextFunction, Request, Response } from 'express';
import { Products } from '../interfaces';
import productsService from '../services/productsService';

const productsController = {
  async add(req: Request, res:Response, _next: NextFunction) {
    try {
      const product = req.body as Products;
      const id = await productsService.add(product);
      const newProduct = {
        id,
        name: product.name,
        amount: product.amount,
      };
      return res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);
    }
  },
};

export default productsController;