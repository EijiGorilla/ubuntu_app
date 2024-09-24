const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  password: "eijipostgre",
  host: "localhost",
  port: 5432,
  database: "test",
});
module.exports = pool;

// const { Pool } = require("pg");
// const pool = new Pool();
// module.exports = pool;
// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };
