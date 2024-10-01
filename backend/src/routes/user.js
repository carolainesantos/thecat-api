const express = require("express");
const UserApi = require("../api/user");
const authMiddleware = require("../middleware/auth");

const userRouter = express.Router();

//Rotas Usuario Comum 
userRouter.post("/", UserApi.createUser);
userRouter.put("/:id", UserApi.updateUser);
userRouter.get("/", authMiddleware(), UserApi.findUser);
userRouter.delete("/", authMiddleware(), UserApi.deleteUser);

//Rotas Admin
userRouter.post("/admin", authMiddleware(['admin']), UserApi.createUserAdmin);
userRouter.put("/:id",authMiddleware(['admin']), UserApi.updateUser);
userRouter.delete("/:id", authMiddleware(['admin']), UserApi.deleteUser);


module.exports = userRouter;
