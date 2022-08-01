import ordersModel from '../models/ordersModel';

const ordersService = {
  async getAll() {
    const result = ordersModel.getAll();
    return result;
  },
};

export default ordersService;