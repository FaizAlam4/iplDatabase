const mysql = require("mysql2/promise");
require("dotenv").config();

let connectTo = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "fzWorld",
});

module.exports=connectTo;