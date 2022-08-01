import Joi from 'joi';
import { Products } from '../interfaces';
import productsModel from '../models/productsModel';

const productsService = {
  async validateBody(product: Products) {
    const schema = Joi.object({
      name: Joi.string().required().min(3),
      amount: Joi.string().required().min(3),
    });
    const result = await schema.validateAsync(product);
    return result;
  },

  async add(product: Products) {
    const result = await productsModel.add(product);
    return result;
  },

  async getAll() {
    const result = await productsModel.getAll();
    return result;
  },

  async update(orderId: number, productId: number) {
    const result = await productsModel.update(orderId, productId);
    return result;
  },
};

export default productsService;