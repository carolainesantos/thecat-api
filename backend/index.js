const express = require("express");
const userRouter = require("./src/routes/user");
const database = require("./src/config/database");

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);

database.db
  .sync({ force: false })
  .then((_) => {
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  })
  .catch((e) => {
    console.log("Erro ao conectar com o banco: ", e);
  });
