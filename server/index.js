const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");

///
const http = require("http");
const path = require("path");

// const server = http.createServer(app);
// const Server = require("socket.io").Server;
// const io = new Server(server, {
//   cors: {
//     origin: "*",
//   },
// });

// const _dirname = path.dirname("");
// const buildPath = path.join(_dirname, "../client/build");

// middleware
app.use(cors());
// app.use(express.static(buildPath));
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

// app.get("/geom", async (requ, res) => {
//   try {
//     const geom5 = await pool.query("SELECT * FROM test");
//     const geom6 = await pool.query("SELECT * FROM scenario");

//     res.json([geom5.rows, geom6.rows]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

app.get("/*", async function (req, res) {
  const geom5 = await pool.query("SELECT * FROM test");
  const geom6 = await pool.query("SELECT * FROM scenario");

  res.json([geom5.rows, geom6.rows]);

  //
  // res.sendFile(
  //   path.join(__dirname, "../client/build/index.html"),
  //   function (err) {
  //     if (err) {
  //       res.status(500).send(err);
  //     }
  //   }
  // );
});

// io.on("connection", (socket) => {
//   console.log("We are connected");

//   socket.on("chat", (chat) => {
//     io.emit("chat", chat);
//   });

//   socket.on("disconnect", () => {
//     console.log("disconnected");
//   });
// });

// server.listen(5001, () => console.log("Listening to port 5001"));
// server.listen(5000, () => console.log("Listening to port 5000"));
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server is running on port 5000");
});
