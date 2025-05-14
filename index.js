const { Band } = require("./models/Band");
const { Musician } = require("./models/Musician");
const { Song } = require("./models/Song");
const { sequelize } = require("./db");
// Define associations here

async function initialize() {
  await sequelize.sync({ force: true });
  //create a band
  const testBand = await Band.create({ name: "Test Band", genre: "Rock" });
  console.log(testBand);

  //update the band
  let updatedBand = await testBand.update({
    name: "Updated Band",
    genre: "Pop",
  });
  console.log(updatedBand);

  //delete the band
  await testBand.destroy();
  const deletedBand = await Band.findByPk(testBand.id);
  console.log(deletedBand);
}
initialize();

module.exports = {
  Band,
  Musician,
  Song,
};
