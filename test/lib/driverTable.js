const driverTable = require('../../lib/driverTable');

const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

const standings = require('../mocks/driverStandings/standings');

describe('driverTable()', () => {
  let table;

  before(() => table = driverTable(standings));

  it('Renders a string', () => {
    expect(table).to.be.a('string');
  });

  it('Contains the title', () => {
    expect(table).to.include('Formula 1 2019: Round 1');
  });
  
  it('Contains the headers', () => {
    ['#', 'Driver', 'Team', 'Wins', 'Points'].forEach(header => {
      expect(table).to.include(header);
    });
  });

  it('Contains the drivers', () => {
    [
      'Valtteri Bottas',
      'Lewis Hamilton',
      'Max Verstappen',
      'Sebastian Vettel',
      'Charles Leclerc',
      'Kevin Magnussen',
      'Nico Hülkenberg',
      'Kimi Räikkönen',
      'Lance Stroll',
      'Daniil Kvyat',
      'Pierre Gasly',
      'Lando Norris',
      'Sergio Pérez',
      'Alexander Albon',
      'Antonio Giovinazzi',
      'George Russell',
      'Robert Kubica',
      'Romain Grosjean',
      'Daniel Ricciardo',
      'Carlos Sainz',
    ].forEach(driver => {
      expect(table).to.include(driver);
    });
  });
});
