const Address = require("./Address");
const Document = require("./Document");

module.exports = (sequelize, DataTypes) => {
  const Farmer = sequelize.define("Farmer", {
    name: DataTypes.STRING,
  });

  Farmer.associate = (models) => {
    Farmer.hasOne(models.Document, {
      as: "document",
      foreignKey: "farmerId",
    });
    Farmer.hasOne(models.Address, {
      as: "address",
      foreignKey: "farmerId",
    });
  };

  return Farmer;
};
