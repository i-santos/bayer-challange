const { Address, Document, Farmer } = require("../../src/app/models");

module.exports = () => {
  return Promise.all([
    async () => {
      await Address.destroy({ truncate: true });
      await Document.destroy({ truncate: true });
      await Farmer.destroy({ truncate: true });
    },
  ]);
};
