const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass123",
  database: "crud",
});

module.exports = db;
