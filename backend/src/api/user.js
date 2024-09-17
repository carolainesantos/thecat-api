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

  createUser(req, res) {
    try {
      res.send("post");
    } catch (e) {
      console.log("e");
      res.status(400).send("Post Deu erro");
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
