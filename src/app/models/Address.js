const Farmer = require("./Farmer");

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define("Address", {
    street: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    address: DataTypes.STRING,
  });

  Address.associate = (models) => {
    Address.belongsTo(models.Farmer, {
      as: "farmer",
      foreignKey: "id",
    });
  };

  return Address;
};
