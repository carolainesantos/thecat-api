const { Sequelize } = require("sequelize");

class Database {
  constructor() {
    this.initDB();
  }

  initDB() {
    this.db = new Sequelize({
      database: "theCatApi",
      host: "localhost",
      username: "root",
      password: "",
      dialect: "mysql",
    });
  }
}

module.exports = new Database();
