const db = require('../../database/connect');

module.exports = {
  async findByEmail(email) {
    const [row] = await db.query(`
      SELECT * 
      FROM Users
      WHERE email = $1
    `, [email]);
    return row;
  },

  async create({ name, email, password }) {
    const [row] = await db.query(`
      INSERT INTO Users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [name, email, password]);
    return row;
  },
};
