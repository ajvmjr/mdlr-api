const db = require('../../database/connect');

module.exports = {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
      SELECT * FROM CATEGORIES
      ORDER BY name ${direction}
    `);
    return rows;
  },

  async create({ name }) {
    const [row] = await db.query(`
      INSERT INTO CATEGORIES (name)
      VALUES ($1)
      RETURNING *
    `, [name]);
    return row;
  },

  async update(id, { name }) {
    const [row] = await db.query(`
      UPDATE CATEGORIES
      SET name = $1
      WHERE id = $2
    `, [name, id]);
    return row;
  },

  async delete(id) {
    await db.query(`
      DELETE FROM CATEGORIES
      WHERE id = $1
    `, [id]);
  },
};
