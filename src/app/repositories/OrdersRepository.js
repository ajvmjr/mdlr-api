import { v4 } from 'uuid';
import db from '../../database/connect';

export default {
  async findAllUserOrders(userId) {
    const rows = await db.query(`
      SELECT p.*, o.id as order_id, o.quantity
      FROM Orders o
      INNER JOIN Products p ON p.id = o.product_id 
      WHERE user_id = $1
    `, [userId]);
    return rows;
  },

  async create(
    {
      product_id, user_id, quantity, order_id,
    },
  ) {
    const orderId = order_id || v4();

    const [row] = await db.query(`
      INSERT INTO Orders (product_id, user_id, quantity, id)
      VALUES ($1, $2, $3, $4)
      RETURNING id
    `, [product_id, user_id, quantity, orderId]);
    return row;
  },
};
