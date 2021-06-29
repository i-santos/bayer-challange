const { Farmer, Document, Address } = require("../models");
const Sequelize = require("sequelize");
const { Op } = Sequelize;

class FarmerController {
  async findByNameOrDocNumber(req, res) {
    const { s } = req.params;

    const term = (s && s.toLowerCase().trim()) || "";

    if (term.length === 0) {
      return res.status(400).send({ message: "Search term is required" });
    }

    const farmers = await Farmer.findAll({
      where: {
        [Op.or]: [
          {
            name: Sequelize.where(
              Sequelize.fn("LOWER", Sequelize.col("name")),
              "LIKE",
              "%" + term + "%"
            ),
          },
          {
            "$document.number$": Sequelize.where(
              Sequelize.fn("LOWER", Sequelize.col("number")),
              "LIKE",
              "%" + term + "%"
            ),
          },
        ],
      },
      include: [
        {
          model: Document,
          as: "document",
          required: true,
        },
        {
          model: Address,
          as: "address",
          required: true,
        },
      ],
    });

    if (farmers && farmers.length > 0) return res.status(200).send(farmers);

    return res.status(404).send({ message: "Farmer not found" });
  }
}

module.exports = new FarmerController();
