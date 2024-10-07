const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../model/user");

const SECRET_KEY = "exemplo";
const SALT_VALUE = 12;

class UserController {
  async createUser(name, email, password, role) {
    if (!name || !email || !password) {
      throw new Error("Nome, email e senha são obrigatórios.");
    }

    const cypherSenha = await bcrypt.hash(String(password), SALT_VALUE);
    console.log(role);
    const userValue = await UserModel.create({
      name,
      email,
      password: cypherSenha,
      role,
    });
    return userValue;
  }

  async findUserById(id) {
    if (id === undefined) {
      throw new Error("Id obrigatório!");
    }

    const userValue = await UserModel.findByPk(id);

    if (!userValue) {
      throw new Error("Usuário não encontrado.");
    }
    return userValue;
  }

  async findAll() {
    const users = await UserModel.findAll();

    return users;
  }

  async update(id, name, email, password, blocked, actualRole) {
    const oldUser = await UserModel.findByPk(id);
    if (email) {
      const sameEmail = await UserModel.findOne({ where: { email } });
      if (sameEmail && sameEmail.id !== id) {
        throw new Error("Email ja cadastrado");
      }
    }

    if (actualRole === "admin") {
      oldUser.blocked = blocked || oldUser.blocked;
    }

    oldUser.name = name || oldUser.name;
    oldUser.email = email || oldUser.email;
    oldUser.password = password
      ? await bcrypt.hash(String(password), SALT_VALUE)
      : oldUser.password;
    oldUser.save();

    return oldUser;
  }

  async delete(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório");
    }

    const userValue = await this.findUserById(id);
    userValue.destroy();
    return;
  }

  async login(email, password) {
    if (email === undefined || password === undefined) {
      throw new Error("Email e senha são obrigatórios.");
    }

    const userValue = await UserModel.findOne({ where: { email } });

    if (!userValue) {
      throw new Error("Usuário ou senha inválidos.");
    }

    const senhaValida = await bcrypt.compare(
      String(password),
      userValue.password
    );
    if (!senhaValida) {
      throw new Error("Usuário ou senha inválidos.");
    }
    return jwt.sign({ id: userValue.id, role: userValue.role }, SECRET_KEY, {
      expiresIn: 60 * 60,
    });
  }
}

module.exports = new UserController();
