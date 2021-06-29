const faker = require("faker");
const { factory } = require("factory-girl");
const { Farmer, Document, Address } = require("../src/app/models");
const CPF = require("cpf");

factory.define("Farmer", Farmer, {
  name: faker.name.findName(),
});

factory.define("Document", Document, {
  type: "CPF",
  number: CPF.generate(),
});

factory.define("Address", Address, {
  street: faker.address.streetName(),
  country: faker.address.country(),
  state: faker.address.state(),
  address: faker.address.streetAddress(),
});

module.exports = factory;
