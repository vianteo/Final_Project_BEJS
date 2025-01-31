'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookmarks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',  // Nama tabel yang dirujuk
          key: 'id'        // Kolom yang dijadikan referensi
        },
        onDelete: 'CASCADE',  // Jika user dihapus, maka bookmarknya juga akan dihapus
        allowNull: false
        
      },
      movieId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Movies',  // Nama tabel yang dirujuk
          key: 'id'         // Kolom yang dijadikan referensi
        },
        onDelete: 'CASCADE',  // Jika movie dihapus, maka bookmarknya juga akan dihapus
        allowNull: false

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookmarks');
  }
};