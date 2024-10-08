const CatsController = require("../controller/cat");

class CatsApi {
  async createCat(req, res) {
    const { breed, temperament, image } = req.body;

    try {
      const cat = await CatsController.create(breed, temperament, image);
      return res.status(201).send(cat);
    } catch (e) {
      return res
        .status(400)
        .send({ error: `Erro ao criar gato: ${e.message}` });
    }
  }

  async updateCat(req, res) {
    const { id } = req.params;
    const { breed, temperament, image } = req.body;

    try {
      const cat = await CatsController.update(
        Number(id),
        breed,
        temperament,
        image
      );
      return res.status(200).send(cat);
    } catch (e) {
      return res
        .status(400)
        .send({ error: `Erro ao alterar gato: ${e.message}` });
    }
  }

  async deleteCat(req, res) {
    const { id = 0 } = req.params;

    try {
      await CatsController.delete(Number(id));
      return res.status(204).send();
    } catch (e) {
      return res
        .status(400)
        .send({ error: `Erro ao deletar gato: ${e.message}` });
    }
  }

  async findOneCat(req, res) {
    const { id } = req.params;
    try {
      const cat = await CatsController.findOne(id);
      return res.status(200).send(cat);
    } catch (e) {
      return res
        .status(400)
        .send({ error: `Erro ao listar gato: ${e.message}` });
    }
  }

  async findAllCats(req, res) {
    try {
      const cats = await CatsController.findAll();
      return res.status(200).send(cats);
    } catch (e) {
      return res
        .status(400)
        .send({ error: `Erro ao listar gatos: ${e.message}` });
    }
  }
}

module.exports = new CatsApi();
