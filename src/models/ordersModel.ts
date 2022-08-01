import { OkPacket, RowDataPacket } from 'mysql2';
import connection from './connection';

const productsModel = {
  async getAll() {
    const [ordersList] = await connection.execute(`
    SELECT o.userId, o.id, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p ON o.id = orderId
    GROUP BY o.id
    ORDER BY o.userId;
    `);
    return ordersList;
  },

  async get(userId: number, orderId: number) {
    const [[xablau]] = await connection.execute<RowDataPacket[]>(`
    SELECT userId, JSON_ARRAYAGG(p.id) AS productsIds FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p ON p.orderId = o.id
    WHERE userId = ? AND p.orderId = ?
    GROUP BY userId;`, [userId, orderId]);
    return xablau;
  },

  async add(userid: number) {
    const [{ insertId }] = await connection.execute<OkPacket>(`
    INSERT INTO Trybesmith.Orders
    (userId)
    VALUES
    (?);
    `, [userid]);
    return insertId;
  },
};

export default productsModel;