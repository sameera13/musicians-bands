const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can create a Song', async () => {
        // TODO - test creating a band
        const testSong = await Song.create(
            {title:"Cool Song", year: 1999, length: 20});
        expect(testSong.title).toBe("Cool Song");
        expect(testSong.year).toBe(1999);
        expect(testSong.length).toBe(20);
    })
    test('can update a Song', async () => {
        // TODO - test updating a song
        const testSong = await Song.create(
            {title:"Cool Song", year: 1999, length: 20});
        const updateSong = await testSong.update({
        title: "Updated cooler song",
        length: 30 });
        expect(updateSong.title).toBe("Updated cooler song");
        expect(updateSong.length).toBe(30);
    })
    test('can delete a Song', async () => {
        // TODO - test deleting a song
        const testSong = await Song.create(
            {title:"Cool Song", year: 1999, length: 20});
            await testSong.destroy();
            const deletedSong = await Song.findByPk(testSong.id);
          expect(deletedSong).toBeNull();
    });
});