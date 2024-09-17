const usersMock = new Array({
  email: "teste@teste",
  password: "123456",
});

class UserModel {
  findAll() {
    return usersMock;
  }

  // create(){

  // }
}

module.exports = new UserModel();
