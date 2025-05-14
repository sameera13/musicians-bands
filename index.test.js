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
    const testMusician = await Musician.create({ name: "Tom", instrument: "Guitar" });
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
    const musician = await Musician.create({ name: "Chris Martin", instrument: "Piano" });
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
    const musician = await Musician.create({ name: 'Kurt Cobain', instrument: 'Guitar' });
    await musician.destroy();
    const found = await Musician.findByPk(musician.id);
    expect(found).toBeNull();
  });
});