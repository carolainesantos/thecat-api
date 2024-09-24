const express = require("express");
const UserApi = require("../api/user");
const authMiddleware = require("../middleware/auth");

const userRouter = express.Router();

userRouter.post("/", UserApi.createUser);
userRouter.put("/:id", UserApi.updateUser);
userRouter.get("/", authMiddleware, UserApi.findUser);
userRouter.delete("/:id", UserApi.deleteUser);

module.exports = userRouter;
