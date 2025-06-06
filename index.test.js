const { sequelize } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Band", async () => {
    // TODO - test creating a band
    const testBand = await Band.create({ name: "Test Band", genre: "Rock" });
    expect(testBand.name).toBe("Test Band");
    expect(testBand.genre).toBe("Rock");
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    const testMusician = await Musician.create({
      name: "Tom",
      instrument: "Guitar",
    });
    expect(testMusician.name).toBe("Tom");
    expect(testMusician.instrument).toBe("Guitar");
  });

  test("can update a Band", async () => {
    // TODO - test updating a band
    const testBand = await Band.create({ name: "Test Band", genre: "Rock" });
    const updatedBand = await testBand.update({
      name: "Updated Band",
      genre: "Pop",
    });
    expect(updatedBand.name).toBe("Updated Band");
    expect(updatedBand.genre).toBe("Pop");
  });

  test("can update a Musician", async () => {
    // TODO - test updating a musician
    const musician = await Musician.create({
      name: "Chris Martin",
      instrument: "Piano",
    });
    const updatedMusician = await musician.update({ instrument: "Guitar" });
    expect(updatedMusician.instrument).toBe("Guitar");
  });

  test("can delete a Band", async () => {
    // TODO - test deleting a band
    const testBand = await Band.create({ name: "Test Band", genre: "Rock" });
    await testBand.destroy();
    const deletedBand = await Band.findByPk(testBand.id);
    expect(deletedBand).toBeNull();
  });

  test("can delete a Musician", async () => {
    // TODO - test deleting a musician
    const musician = await Musician.create({
      name: "Kurt Cobain",
      instrument: "Guitar",
    });
    await musician.destroy();
    const found = await Musician.findByPk(musician.id);
    expect(found).toBeNull();
  });

  test("can create a Song", async () => {
    // TODO - test creating a band
    const testSong = await Song.create({
      title: "Cool Song",
      year: 1999,
      length: 20,
    });
    expect(testSong.title).toBe("Cool Song");
    expect(testSong.year).toBe(1999);
    expect(testSong.length).toBe(20);
  });
  test("can update a Song", async () => {
    // TODO - test updating a song
    const testSong = await Song.create({
      title: "Cool Song",
      year: 1999,
      length: 20,
    });
    const updateSong = await testSong.update({
      title: "Updated cooler song",
      length: 30,
    });
    expect(updateSong.title).toBe("Updated cooler song");
    expect(updateSong.length).toBe(30);
  });
  test("can delete a Song", async () => {
    // TODO - test deleting a song
    const testSong = await Song.create({
      title: "Cool Song",
      year: 1999,
      length: 20,
    });
    await testSong.destroy();
    const deletedSong = await Song.findByPk(testSong.id);
    expect(deletedSong).toBeNull();
  });

  test("can delete a Musician", async () => {
    // TODO - test deleting a musician
    const musician = await Musician.create({
      name: "Kurt Cobain",
      instrument: "Guitar",
    });
    await musician.destroy();
    const found = await Musician.findByPk(musician.id);
    expect(found).toBeNull();
  });

  test("One band has many musicians", async () => {
    //create a band
    const band = await Band.create({ name: "Test Band", genre: "Rock" });

    //create musicians
    const musician1 = await Musician.create({
      name: "Kurt Cobain",
      instrument: "Guitar",
    });
    const musician2 = await Musician.create({
      name: "Cobain Kurt",
      instrument: "Bass",
    });
    const musician3 = await Musician.create({
      name: "Curt Kobain",
      instrument: "Guitar",
    });

    //add musicians to band
    await band.setMusicians([musician1, musician2, musician3]);

    //get musicians from band
    const musicians = await band.getMusicians();

    expect(musicians[0].id).toBe(musician1.id);
    expect(musicians[1].id).toBe(musician2.id);
    expect(musicians[2].id).toBe(musician3.id);
  });

  test("One band has many musicians and bands has many songs", async () => {
    //create a band
    const band = await Band.create({ name: "Test Band", genre: "Rock" });
    const testSong1 = await Song.create({
      title: "Cool Song",
      year: 1999,
      length: 20,
    });
    const testSong2 = await Song.create({
      title: "Cool Song2",
      year: 1999,
      length: 20,
    });

    await band.addSong([testSong1, testSong2]);
    const songs = await band.getSongs();

    expect(songs[0].id).toBe(testSong1.id);
    expect(songs[1].id).toBe(testSong2.id);
  });
  afterAll(async () => {
    // close the connection to the database
    await sequelize.close();
  });
});
