const express = require("express");
const UserApi = require("../api/user");
const authMiddleware = require("../middleware/auth");

const userRouter = express.Router();

userRouter.post("/login", UserApi.login);

//Rotas Usuario Comum
userRouter.post("/", UserApi.createUser);
userRouter.get("/info", authMiddleware(), UserApi.findUserById);
userRouter.put("/", authMiddleware(), UserApi.updateUser);
userRouter.delete("/", authMiddleware(), UserApi.deleteUser);

//Rotas Admin
userRouter.post("/admin", authMiddleware(["admin"]), UserApi.createUserAdmin);
userRouter.get("/", authMiddleware(["admin"]), UserApi.findAll);
userRouter.get("/:id", authMiddleware(["admin"]), UserApi.findUserById);
userRouter.put("/:id", authMiddleware(["admin"]), UserApi.updateUser);
userRouter.delete("/:id", authMiddleware(["admin"]), UserApi.deleteUser);

module.exports = userRouter;
