const { Band } = require("./models/Band");
const { Musician } = require("./models/Musician");
const { Song } = require("./models/Song");
const { sequelize } = require("./db");
// Define associations here
Band.hasMany(Musician);
Musician.belongsTo(Band);

Band.belongsToMany(Song, { through: "BandSong" });
Song.belongsToMany(Band, { through: "BandSong" });

async function main() {
  await sequelize.sync({ force: true });
  const coolSong = {
    title: "Cool Song",
    year: 1999,
    length: 20,
  };
  const song1 = await Song.create(coolSong);
  await Song.bulkCreate([
    {
      title: "Song2",
      year: 2009,
      length: 15,
    },
    {
      title: "Song3",
      year: 2020,
      length: 12,
    },
    {
      title: "Song 4",
      year: 2025,
      length: 5,
    },
  ]);
  console.log("-------Create---------");
  console.log(JSON.stringify(song1, null, 2));

  const updateSong = await song1.update({
    length: 30,
    title: "Updated cooler song",
  });
  console.log("---------------Update--------");
  console.log(JSON.stringify(updateSong, null, 2));

  console.log("------------Desotry --------");
  const destroySong = await updateSong.destroy();
  console.log(JSON.stringify(destroySong, null, 2));

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
main();

module.exports = {
  Band,
  Musician,
  Song,
};
