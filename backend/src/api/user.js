const UserController = require("../controller/user");

class UserApi {
  async findUserById(req, res) {
    try {
      const id = req.session.id;
      const user = await UserController.findUserById(id);

      res.send({ user });
    } catch (e) {
      console.log(e);
      res.status(400).send("Erro ao consultar usuário");
    }
  }

  async findAll(req, res) {
    try {
      const users = await UserController.findAll();
      return res.status(200).send(users);
    } catch (e) {
      return res
        .status(400)
        .send({ error: `Erro ao listar usuário ${e.message}` });
    }
  }

  async createUser(req, res) {
    const { name, email, tel, dtNasc, cep, password } = req.body;

    try {
      const user = await UserController.createUser(
        name,
        tel,
        dtNasc,
        cep,
        email,
        password,
        "viewer"
      );
      return res.status(201).send(user);
    } catch (e) {
      return res
        .status(400)
        .send({ error: `Erro ao criar usuário ${e.message}` });
    }
  }

  async createUserAdmin(req, res) {
    const { name, tel, dtNasc, cep, email, password } = req.body;
    try {
      const user = await UserController.createUser(
        name,
        tel,
        dtNasc,
        cep,
        email,
        password,
        "admin"
      );
      return res.status(201).send(user);
    } catch (e) {
      return res
        .status(400)
        .send({ error: `Erro ao criar usuário ${e.message}` });
    }
  }

  async updateUser(req, res) {
    try {
      const id = req.params.id || req.session.id;
      const actualRole = req.session.role;
      const { name, tel, dtNasc, cep, email, password, blocked } = req.body;
      const updated = await UserController.update(
        id,
        name,
        tel,
        dtNasc,
        cep,
        email,
        password,
        blocked,
        actualRole
      );
      res.status(200).send(updated);
    } catch (e) {
      console.log(e);
      res.status(400).send("Erro ao atualizar");
    }
  }

  async deleteUser(req, res) {
    try {
      const id = req.params.id || req.session.id;
      await UserController.delete(id);
      return res.status(204).send();
    } catch (e) {
      console.log(e);
      res.status(400).send("Erro ao deletar usuário");
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    console.log(req.body);
    try {
      const token = await UserController.login(email, password);

      res.status(200).send({ token });
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  }
}

module.exports = new UserApi();
