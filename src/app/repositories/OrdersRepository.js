import db from '../../database/connect';

export default {
  async findAllUserOrders(userId) {
    const rows = await db.query(`
      SELECT p.*
      FROM Orders o
      INNER JOIN Products p ON p.id = o.product_id 
      WHERE user_id = $1
    `, [userId]);
    return rows;
  },

  async create({ product_id, user_id }) {
    const [row] = await db.query(`
      INSERT INTO Orders (product_id, user_id)
      VALUES ($1, $2)
      RETURNING *
    `, [product_id, user_id]);
    return row;
  },
};
