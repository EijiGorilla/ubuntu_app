require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({
  user:
    process.env.NODE_ENV === "production" ? process.env.DB_USER : "postgres",
  password:
    process.env.NODE_ENV === "production" ? process.env.DB_PASS : "eijipostgre",
  host:
    process.env.NODE_ENV === "production" ? process.env.DB_HOST : "localhost",
  port: process.env.NODE_ENV === "production" ? process.env.DB_PORT : 5432,
  database: process.env.NODE_ENV === "production" ? process.env.DB : "test",
});
// module.exports = pool;

// const { Pool } = require("pg");
// const pool = new Pool();
// module.exports = pool;
module.exports = {
  pool,
  query: (text, params) => pool.query(text, params),
};
