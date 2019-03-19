const driverStandings = require('../../lib/driverStandings');
const axios = require('../../lib/axios');
const MockAdapter = require('axios-mock-adapter');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));
const mock = new MockAdapter(axios);
const successfulResponse = require('../mocks/successfulResponse');

describe('driverStandings()', () => {
  const uri = 'driverStandings.json';

  context('when API is unavailable', () => {
    before(() => mock.onGet(uri).reply(500, 'Error'));
    
    it('Throws an error', async () => {
      await expect(driverStandings()).to.be.rejectedWith(
        'Could not fetch standings: Error: Request failed with status code 500'
      );
    });
  });

  context('when API is available', () => {
    let standings;
    before(() => mock.onGet(uri).reply(200, successfulResponse));
    beforeEach(async () => {
      standings = await driverStandings();
    });

    it('Return an object', () => {
      expect(standings).to.be.an('object');
    });

    it('Has the correct keys', () => {
      expect(standings).to.have.keys(['table', 'season', 'round']);
    });

    it('Returns the correct season', () => {
      expect(standings.season).to.eq('2019');
    });

    it('Returns the correct round', () => {
      expect(standings.round).to.eq(1);
    });

    it('Returns a table with the correct keys', () => {
      standings.table.forEach(standing => {
        expect(standing).to.have.keys([
          'givenName', 'familyName', 'position', 'points',
          'wins', 'nationality', 'constructor'
        ]);
      });
    });

    it('Returns the table with the correct values', () => {
      const standing = standings.table[0];

      expect(standing.givenName).to.eq('Valtteri');
      expect(standing.familyName).to.eq('Bottas');
      expect(standing.position).to.eq(1);
      expect(standing.points).to.eq(26);
      expect(standing.wins).to.eq(1);
      expect(standing.nationality).to.eq('Finnish');
      expect(standing.constructor).to.eq('Mercedes');
    });
  });
});
