"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          nicNumber: "1234567",
          uuid: "d6bb2635-9c8d-4a63-9ba8-17677952e16c",
          updatedAt: "2021-10-05 10:04:35",
          createdAt: "2021-10-05 10:04:35",
        },
        {
          name: "Jane Doe",
          nicNumber: "123423567",
          uuid: "d6bb2635-9c8d-4a63-9ba8-17677345e16c",
          updatedAt: "2021-10-05 10:04:35",
          createdAt: "2021-10-05 10:04:35",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
