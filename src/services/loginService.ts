import Joi from 'joi';
import { Users } from '../interfaces';
import usersModel from '../models/usersModel';

const loginService = {
  async validateBody(user: Omit<Users, 'classe' | 'level'>) {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    const result = await schema.validateAsync(user);
    return result;
  },

  async login(user: Omit<Users, 'classe' | 'level'>) {
    const result = usersModel.get(user);
    return result;
  },
};

export default loginService;