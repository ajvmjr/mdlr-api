import db from '../../database/connect';

export default {
  async findAll({ orderBy = 'ASC', price = 'ASC', categoryId }) {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const priceDirection = price.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await db.query(`
      SELECT p.* 
      FROM PRODUCTS p
      LEFT JOIN CATEGORIES c ON p.category_id = c.id
      WHERE p.category_id = $1 OR $1 IS NULL
      ORDER BY CAST (p.price AS FLOAT) ${priceDirection}, p.name ${direction}
    `, [categoryId]);
    return rows;
  },

  async findById(id) {
    const [row] = await db.query(`
      SELECT p.* 
      FROM PRODUCTS p
      LEFT JOIN CATEGORIES c ON p.category_id = c.id
      WHERE p.id = $1
    `, [id]);
    return row;
  },

  async create({
    name, filename, price, category_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO PRODUCTS (name, image, price, category_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [name, filename, price, category_id]);
    return row;
  },

  async update(id, {
    name, filename, price, category_id,
  }) {
    const [row] = await db.query(`
      UPDATE PRODUCTS
      SET name = $1,
          image = $2,
          price = $3,
          category_id = $4
      WHERE id = $5
    `, [name, filename, price, category_id, id]);
    return row;
  },

  async delete(id) {
    await db.query(`
    DELETE FROM PRODUCTS
    WHERE id = $1
    `, [id]);
  },
};
