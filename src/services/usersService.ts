import Joi from 'joi';
import { Users } from '../interfaces';
import usersModel from '../models/usersModel';

const usersService = {
  async validateBody(user: Users) {
    const schema = Joi.object({
      username: Joi.string().required().min(3),
      classe: Joi.string().required().min(3),
      level: Joi.number().required().min(1),
      password: Joi.string().required().min(8),
    });
    const result = await schema.validateAsync(user);
    return result;
  },

  async add(user: Users) {
    const result = usersModel.add(user);
    return result;
  },
};

export default usersService;