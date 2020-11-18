const dbConnection = require("./../../services/dbConnection");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");

module.exports = class Docente {
  async auth(email, senha) {
    const hash = await bcrypt.hash(senha, 10);
    const result = await bcrypt.compare(
      senha,
      "$2b$10$LddNkhF/E1JeolQvUHg4G.y8ounAvc5YdT2U26WK1AfBgeHWB3Ti."
    );

    const pool = await mysql.createPool({
      host: "localhost",
      user: "root",
      password: "@fer#1012",
      database: "sad",
    });

    const promisePool = pool.promise();

    const [rows, fields] = await promisePool.query(
      "SELECT * FROM `Docente` limit 1"
    );

    console.log(rows);
  }
};
