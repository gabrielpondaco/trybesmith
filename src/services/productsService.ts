import { Products } from '../interfaces';
import productsModel from '../models/productsModel';

const productsService = {
  async add(product: Products) {
    const result = productsModel.add(product);
    return result;
  },
};

export default productsService;