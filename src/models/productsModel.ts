import { OkPacket } from 'mysql2';
import connection from './connection';
import { Products } from '../interfaces/index';

const productsModel = {
  async add(product: Products) {
    const { name, amount } = product;
    const [{ insertId }] = await connection
      .execute<OkPacket>(`INSERT INTO Trybesmith.Products(name, amount) 
    VALUES(?, ?);`, [name, amount]);
    return insertId;
  },

  async getAll() {
    const [productsList] = await connection.execute('SELECT * FROM Trybesmith.Products');
    return productsList;
  },
};

export default productsModel;