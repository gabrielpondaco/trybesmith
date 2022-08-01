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

  async update(orderId: number, productId: number) {
    const result = await connection.execute(`UPDATE Trybesmith.Products
    SET
    orderId = ?
    WHERE id = ?;`, [orderId, productId]);
    return result;
  },
};

export default productsModel;