import { Users } from '../interfaces';
import usersModel from '../models/usersModel';

const usersService = {
  async add(user: Users) {
    const result = usersModel.add(user);
    return result;
  },
};

export default usersService;