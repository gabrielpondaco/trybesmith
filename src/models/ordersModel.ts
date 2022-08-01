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
};

export default productsModel;