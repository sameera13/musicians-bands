const { Sequelize, sequelize, DataTypes, Model } = require('../db');

class Musician extends Model {}

Musician.init(
  {
    name: DataTypes.STRING,
    instrument: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Musician",
  }
);

module.exports = {
  Musician,
};
