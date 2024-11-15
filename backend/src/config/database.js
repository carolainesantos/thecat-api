const { Sequelize } = require("sequelize");
require("dotenv").config();
class Database {
  constructor() {
    this.initDB();
  }

  initDB() {
    this.db = new Sequelize({
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      username: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      dialect: process.env.DB_DIALECT,

      // dialectOptions: {
      //   ssl: {
      //     require: true,
      //     rejectUnauthorized: false,
      //   },
      // },
    });
    console.log(process.env.DB_PASS);
  }
}

module.exports = new Database();
