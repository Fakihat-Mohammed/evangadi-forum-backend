const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
  host: "sql12.freesqldatabase.com",
  user: "sql12771336",
  password: process.env.DB_PASSWORD,
  database: "sql12771336",
});

module.exports = db.promise();
