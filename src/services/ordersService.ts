import Joi from 'joi';
import ordersModel from '../models/ordersModel';

const ordersService = {
  async validateBody(unknown: unknown) {
    const schema = Joi
      .array().items(Joi.number()).min(1).message('"productsIds" must include only numbers')
      .required()
      .label('productsIds');
    const result = await schema.validateAsync(unknown);
    return result;
  },

  async add(userid: number) {
    const result = await ordersModel.add(userid);
    return result;
  },

  async getAll() {
    const result = ordersModel.getAll();
    return result;
  },

  async get(userId: number, orderId: number) {
    const result = await ordersModel.get(userId, orderId);
    return result;
  },
};

export default ordersService;