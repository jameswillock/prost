const constructorStandings = require('../../lib/constructorStandings');
const axios = require('../../lib/axios');
const MockAdapter = require('axios-mock-adapter');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));
const successfulResponse = require('../mocks/constructorStandings/successfulResponse');

describe('constructorStandings()', () => {
  let mock;
  before(() => mock = new MockAdapter(axios));
  after(() => mock.restore());
  
  context('when API is unavailable', () => {
    before(() => {
      mock.onGet('constructorstandings.json').reply(500, 'Error');
    });
    
    it('Throws an error', async () => {
      await expect(constructorStandings()).to.be.rejectedWith(
        'Could not fetch standings: Error: Request failed with status code 500'
      );
    });
  });
  
  context('when API is available', () => {
    let standings;

    before(async () => {
      mock.onGet('constructorstandings.json').reply(200, successfulResponse);
      standings = await constructorStandings();
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
          'position', 'points', 'wins', 'constructor', 'nationality'
        ]);
      });
    });

    it('Returns the table with the correct values', () => {
      const standing = standings.table[0];

      expect(standing.position).to.eq(1);
      expect(standing.points).to.eq(44);
      expect(standing.wins).to.eq(1);
      expect(standing.nationality).to.eq('German');
      expect(standing.constructor).to.eq('Mercedes');
    });
  });
});
