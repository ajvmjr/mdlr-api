const dotenv = require('dotenv');
const pg = require('pg');

dotenv.config();

const client = new pg.Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

client.connect();

exports.query = async (q, values) => {
  const { rows } = await client.query(q, values);
  return rows;
};
