'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       // One-to-many relation: One movie can be bookmarked many times
       Movie.hasMany(models.Bookmark, {
        foreignKey: 'movieId',  // Foreign key untuk relasi
        as: 'bookmarks'         // Nama alias untuk akses bookmarks
      });
    }
  }
  Movie.init({
    tittle: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    trailerUrl: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    rating: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};