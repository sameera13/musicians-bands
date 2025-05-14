const { Sequelize, sequelize, DataTypes, Model } = require("../db");

// TODO - define the Band model
class Band extends Model {}

Band.init(
  {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Band",
  }
);

module.exports = {
  Band,
};
