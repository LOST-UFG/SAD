const mysql = require("mysql2");

const connection = async () => {
  const conn = await mysql.createPool({
    host: "localhost",
    user: "root",
    password: "@fer#1012",
    database: "sad",
  });

  return conn;
};

module.exports = connection;
