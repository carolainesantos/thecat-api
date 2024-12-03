const cats = require("../model/cat");
const CatsModel = require("../model/cat");

class CatsController {
  async create(breed, temperament, image, code) {
    if (!breed || !temperament || !image) {
      throw new Error("Dados obrigatórios não preenchidos.");
    }

    const catsValue = await cats.create({
      breed,
      temperament,
      image,
      code,
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

    if (!cats.length) {
      const apiKey =
        "live_hVIZ29uXTZKRfZBeO3EcBdrThj9U5vw88QF9QOFijGEAIaWVjyNRqFMNPJ6WT1qf ";
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=100&api_key=${apiKey}`
      );
      const apiData = await response.json();

      const catsData = await Promise.all(
        apiData.map(async (cat) => {
          const catDetailResponse = await fetch(
            `https://api.thecatapi.com/v1/images/${cat.id}`
          );
          const catDetail = await catDetailResponse.json();

          const newCat = await CatsModel.create({
            code: cat.id,
            breed: cat.breeds[0]?.name || "Unknown",
            temperament: cat.breeds[0]?.temperament || "Unknown",
            image: cat.url,
          });

          return newCat;
        })
      );

      // Atualiza cats com os dados obtidos da API e salvos no banco
      cats = catsData;
    }

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
