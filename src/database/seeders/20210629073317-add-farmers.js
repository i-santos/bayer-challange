"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ids = [];
    let id1 = await queryInterface.bulkInsert(
      "Farmers",
      [
        {
          name: "Tester",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      { returning: true }
    );

    let id2 = await queryInterface.bulkInsert(
      "Farmers",
      [
        {
          name: "Another",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      { returning: true }
    );
    ids.push(id1, id2);

    await queryInterface.bulkInsert(
      "Addresses",
      ids.map((id) => {
        return {
          street: `Rua ${id}`,
          state: "DF",
          country: "Brasil",
          address: `Rua ${id}, DF, Brasil`,
          created_at: new Date(),
          updated_at: new Date(),
          farmer_id: id,
        };
      })
    );

    await queryInterface.bulkInsert(
      "Documents",
      ids.map((id) => {
        return {
          type: "CPF",
          number: `123456789-${id}${id}`,
          created_at: new Date(),
          updated_at: new Date(),
          farmer_id: id,
        };
      })
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Farmers", null, {});
  },
};
