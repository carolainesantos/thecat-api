const database = require("../config/database");

class UserModel {
  constructor() {
    this.model = database.db.define("users", {
      id: {
        type: database.db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: database.db.Sequelize.STRING,
        allowNull: false,
      },
      tel: {
        type: database.db.Sequelize.STRING,
        allowNull: false,
      },
      dtNasc: {
        type: database.db.Sequelize.DATE,
        allowNull: false,
      },
      cep: {
        type: database.db.Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: database.db.Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: database.db.Sequelize.STRING,
        allowNull: false,
      },
      blocked: {
        type: database.db.Sequelize.BOOLEAN,
        defaultValue: false,
      },
      role: {
        type: database.db.Sequelize.STRING,
        validate: {
          isIn: [["admin", "viewer"]],
        },
      },
    });
  }
}

module.exports = new UserModel().model;
