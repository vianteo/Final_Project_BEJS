'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       // Many-to-one relation: Many bookmarks belong to one user
       Bookmark.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'  // Alias untuk mengakses user dari bookmark
      });

        // Many-to-one relation: Many bookmarks belong to one movie
        Bookmark.belongsTo(models.Movie, {
          foreignKey: 'movieId',
          as: 'movie'  // Alias untuk mengakses movie dari bookmark
        });

    }
  }
  Bookmark.init({
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};