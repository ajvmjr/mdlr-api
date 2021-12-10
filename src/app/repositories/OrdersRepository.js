import db from '../../database/connect';

export default {
  async findAllUserOrders(userId) {
    const rows = await db.query(`
      SELECT p.*, o.quantity
      FROM Orders o
      INNER JOIN Products p ON p.id = o.product_id 
      WHERE user_id = $1
    `, [userId]);
    return rows;
  },

  async create({ product_id, user_id, quantity }) {
    const [row] = await db.query(`
      INSERT INTO Orders (product_id, user_id, quantity)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [product_id, user_id, quantity]);
    return row;
  },
};
