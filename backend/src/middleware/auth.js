const jwt = require("jsonwebtoken");
const user = require("../controller/user");

function authMiddleware(roles = []) {
  return (req, res, next) => {
    console.log("oies");
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(400).json({ mensagem: "Token não fornecido" });
    }

    jwt.verify(token, "exemplo", async (err, decoded) => {
      try {
        if (err) {
          return res.status(401).json({ mensagem: "Token inválido" });
        }

        const userLogged = await user.findUserById(decoded.id);

        if (!userLogged) {
          return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }
        if (roles.length && !roles.includes(userLogged.role)) {
          return res
            .status(403)
            .json({ mensagem: "Você não possui permissão" });
        }
        req.session = decoded;

        next();
      } catch (error) {
        console.error(error);
        return res.status(403).json({ mensagem: "Você não possui permissão" });
      }
    });
  };
}

module.exports = authMiddleware;
