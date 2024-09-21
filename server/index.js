const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());
// app.get("/geom", async (requ, res) => {
//   try {
//     // const geom = await pool.query("SELECT * FROM sar_points");
//     // const geom = await pool.query("SELECT ST_AsGeoJSON(geom) FROM sar_points");
//     const geom = await pool.query(
//       "SELECT json_build_object('type', 'FeatureCollection', 'features', json_agg(ST_AsGeoJSON(t.*)::json)) FROM sar_points2 as t(id, name, geom)"
//     );

//     const geom2 = await pool.query(
//       "SELECT json_build_object('type', 'FeatureCollection', 'features', json_agg(ST_AsGeoJSON(t.*)::json)) FROM adm_jakarta_kabpaten_subdiv as t(id, name, geom)"
//     );

//     const geom3 = await pool.query(
//       "SELECT json_build_object('type', 'FeatureCollection', 'features', json_agg(ST_AsGeoJSON(t.*)::json)) FROM adm_jakarta_kecamatan_distr as t(id, name, geom)"
//     );

//     const geom4 = await pool.query(
//       "SELECT json_build_object('type', 'FeatureCollection', 'features', json_agg(ST_AsGeoJSON(t.*)::json)) FROM adm_jakarta_desa_villages as t(id, name, geom)"
//     );

//     const geom5 = await pool.query("SELECT * FROM test");
//     const geom6 = await pool.query("SELECT * FROM scenario");

//     res.json([
//       geom.rows,
//       geom2.rows,
//       geom3.rows,
//       geom4.rows,
//       geom5.rows,
//       geom6.rows,
//     ]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

app.get("/geom", async (requ, res) => {
  try {
    const geom5 = await pool.query("SELECT * FROM test");
    const geom6 = await pool.query("SELECT * FROM scenario");

    res.json([geom5.rows, geom6.rows]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
