import Joi from 'joi';
import { Users } from '../interfaces';

const loginService = {
  async validateBody(user: Omit<Users, 'classe' | 'level'>) {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    const result = await schema.validateAsync(user);
    return result;
  },
};

export default loginService;