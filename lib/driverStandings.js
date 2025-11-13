import axios from './axios.js'
import Keyv from 'keyv'
import { KeyvFile } from 'keyv-file'

const cache = new Keyv({
  store: new KeyvFile({ filename: '.cache/prost-drivers.json' }),
  namespace: 'drivers',
  ttl: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
})

const fetchDriverStandings = async (year) => {
  const response = await axios.get(`${year}/driverstandings/`)
  const standings = response.data.MRData.StandingsTable.StandingsLists[0]

  return {
    table: standings.DriverStandings.map(standing => ({
      givenName: standing.Driver.givenName,
      familyName: standing.Driver.familyName,
      position: parseInt(standing.position, 10),
      points: parseFloat(standing.points),
      wins: parseInt(standing.wins, 10),
      nationality: standing.Driver.nationality,
      constructor: standing.Constructors.slice(-1)[0].name,
    })),
    season: standings.season,
    round: parseInt(standings.round, 10),
  }
}

const driverStandings = async (year) => {
  const cacheKey = String(year)
  const cached = await cache.get(cacheKey)

  if (cached) {
    return cached
  }

  const data = await fetchDriverStandings(year)
  await cache.set(cacheKey, data)
  return data
}

export default driverStandings
