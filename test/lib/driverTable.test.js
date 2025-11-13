import driverTable from '../../lib/driverTable.js'
import { use, expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
use(chaiAsPromised)
import standings from '../mocks/driverStandings/standings.js'

describe('driverTable()', () => {
  let table

  before(() => (table = driverTable(standings)))

  it('Renders a string', () => {
    expect(table).to.be.a('string')
  })

  it('Contains the title', () => {
    expect(table).to.include('Formula 1 2019: Round 1')
  })

  it('Contains the headers', () => {
    ['#', 'Driver', 'Team', 'Wins', 'Points'].forEach((header) => {
      expect(table).to.include(header)
    })
  })

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
    ].forEach((driver) => {
      expect(table).to.include(driver)
    })
  })
})
