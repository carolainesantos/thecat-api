const database = require("../config/database");

class CatsModel {
  constructor() {
    this.model = database.db.define("cats", {
      id: {
        type: database.db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      breed: {
        type: database.db.Sequelize.STRING,
      },
      temperament: {
        type: database.db.Sequelize.STRING,
      },
      image: {
        type: database.db.Sequelize.STRING,
      },
    });
  }
}
module.exports = new CatsModel().model;
