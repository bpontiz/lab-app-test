const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER || "nodebootcamp2",
    password: process.env.MYSQL_PASSWORD || "bootsilicecamp101",
    database: process.env.MYSQL_DATABASE || "db_bootcamp2",
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.MYSQL_PORT || "3306",
    dialect: "mysql"
  },
  test: {
    username: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || null,
    database: process.env.MYSQL_DATABASE || "database_test",
    host: process.env.MYSQL_HOST || "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || null,
    database: process.env.MYSQL_DATABASE || "database_production",
    host: process.env.MYSQL_HOST || "127.0.0.1",
    dialect: "mysql"
  }
};