import driverTable from '../../lib/constructorTable.js'
import { use, expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
use(chaiAsPromised)
import standings from '../mocks/constructorStandings/standings.js'

describe('constructorTable()', () => {
  let table

  before(() => (table = driverTable(standings)))

  it('Renders a string', () => {
    expect(table).to.be.a('string')
  })

  it('Contains the title', () => {
    expect(table).to.include('Formula 1 2019: Round 1')
  })

  it('Contains the headers', () => {
    ['#', 'Team', 'Wins', 'Points'].forEach((header) => {
      expect(table).to.include(header)
    })
  })

  it('Contains the teams', () => {
    [
      'Mercedes',
      'Ferrari',
      'Red Bull',
      'Haas F1 Team',
      'Renault',
      'Alfa Romeo',
      'Racing Point',
      'Toro Rosso',
      'McLaren',
      'Williams',
    ].forEach((driver) => {
      expect(table).to.include(driver)
    })
  })
})
