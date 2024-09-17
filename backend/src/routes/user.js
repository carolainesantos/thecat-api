const express = require("express");
const UserApi = require("../api/user");

const userRouter = express.Router();

userRouter.get("/", UserApi.findUser);
userRouter.post("/", UserApi.createUser);
userRouter.put("/:id", UserApi.updateUser);
userRouter.delete("/:id", UserApi.deleteUser);

module.exports = userRouter;
