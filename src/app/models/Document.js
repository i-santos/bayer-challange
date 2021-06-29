const Farmer = require("./Farmer");

module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define("Document", {
    type: DataTypes.STRING,
    number: DataTypes.STRING,
  });

  Document.associate = (models) => {
    Document.belongsTo(models.Farmer, {
      as: "farmer",
      foreignKey: "id",
    });
  };

  return Document;
};
