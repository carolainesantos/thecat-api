const express = require("express");
const CatApi = require("../api/cat");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/", authMiddleware(), CatApi.findAllCats);
router.get("/:id", authMiddleware(), CatApi.findOneCat);

router.post("/", authMiddleware(["admin"]), CatApi.createCat);
router.put("/:id", authMiddleware(["admin"]), CatApi.updateCat);
router.delete("/:id", authMiddleware(["admin"]), CatApi.deleteCat);

module.exports = router;
