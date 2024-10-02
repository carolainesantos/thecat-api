const UserController = require("../controller/user");

class UserApi {
  async findUser(req, res) {
    try {
      console.log("api", req.session);
      const users = await UserController.findAll();

      res.send({ users });
    } catch (e) {
      console.log(e);
      res.status(400).send("Get deu erro");
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
      const id = req.param.id || req.session.id;
      res.send("update");
    } catch (e) {
      console.log("e");
      res.status(400).send("Update Deu erro");
    }
  }

  deleteUser(req, res) {
    try {
      const id = req.param.id || req.session.id;
      res.send("delete");
    } catch (e) {
      console.log("e");
      res.status(400).send("Delete Deu erro");
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
