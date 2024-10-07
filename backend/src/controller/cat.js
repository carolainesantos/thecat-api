const cats = require("../model/cat");
const CatsModel = require("../model/cat");

class CatsController {
  async create(breed, temperament, image) {
    if (!breed || !temperament || !image) {
      throw new Error("Dados obrigatórios não preenchidos.");
    }

    const catsValue = await cats.create({
      breed,
      temperament,
      image,
    });

    return catsValue;
  }

  async findOne(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório.");
    }

    const catsValue = await cats.findByPk(id);

    if (!catsValue) {
      throw new Error("Gato não encontrado.");
    }

    return catsValue;
  }

  async findAll() {
    const cats = await CatsModel.findAll();

    return cats;
  }

  async update(id, breed, temperament, image) {
    const oldCat = await cats.findByPk(id);

    if (!oldCat) {
      throw new Error("Gato não encontrado!");
    }
    console.log(image);

    oldCat.breed = breed || oldCat.breed;
    oldCat.temperament = temperament || oldCat.temperament;
    oldCat.image = image || oldCat.image;
    oldCat.save();

    return oldCat;
  }

  async delete(id) {
    if (id === undefined) {
      throw new Error("Id é obrigatório.");
    }
    const charactersValue = await this.findOne(id);
    charactersValue.destroy();

    return;
  }
}

module.exports = new CatsController();
