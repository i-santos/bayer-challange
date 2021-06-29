const faker = require("faker");
const { factory } = require("factory-girl");
const { Farmer, Document, Address } = require("../src/app/models");
const CPF = require("cpf");

factory.define(
  "Farmer",
  Farmer,
  {
    name: faker.name.findName(),
  },
  {
    include: [
      Farmer.hasOne(Document, { as: "document", foreignKey: "farmerId" }),
      Farmer.hasOne(Address, { as: "address", foreignKey: "farmerId" }),
    ],
  }
);

factory.define(
  "Document",
  Document,
  {
    type: "CPF",
    number: CPF.generate(),
  },
  {
    include: [Document.belongsTo(Farmer, { as: "farmer", foreignKey: "id" })],
  }
);

factory.define(
  "Address",
  Address,
  {
    street: faker.address.streetName(),
    country: faker.address.country(),
    state: faker.address.state(),
    address: faker.address.streetAddress(),
  },
  {
    include: [Address.belongsTo(Farmer, { as: "farmer", foreignKey: "id" })],
  }
);

module.exports = factory;
