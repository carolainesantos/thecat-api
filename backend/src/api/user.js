const UserController = require("../controller/user");

class UserApi {
  findUser(req, res) {
    try {
      const users = UserController.findAll();

      res.send({ users });
    } catch (e) {
      console.log("e");
      res.status(400).send("Get Deu erro");
    }
  }

  async createUser(req, res) {
    const { name, email, password } = req.body;

    try {
      const user = await UserController.createUser(
        name,
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
    const { name, email, password } = req.body;

    try {
      const user = await UserController.createUser(
        name,
        email,
        password,
        bloqueado,
        "admin"
      );
      return res.status(201).send(user);
    } catch (e) {
      return res
        .status(400)
        .send({ error: `Erro ao criar usuário ${e.message}` });
    }
  }

  updateUser(req, res) {
    try {
      res.send("update");
    } catch (e) {
      console.log("e");
      res.status(400).send("Update Deu erro");
    }
  }

  deleteUser(req, res) {
    try {
      res.send("delete");
    } catch (e) {
      console.log("e");
      res.status(400).send("Delete Deu erro");
    }
  }
}

module.exports = new UserApi();
