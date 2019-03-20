const axios = require('./axios');
const cache = require('./cache');

const fetchStandings = async () => {
  const response = await axios.get('driverstandings.json');
  const standings = response.data.MRData.StandingsTable.StandingsLists[0];
  
  return {
    table: standings.DriverStandings.map(standing => ({
      givenName: standing.Driver.givenName,
      familyName: standing.Driver.familyName,
      position: parseInt(standing.position, 10),
      points: parseFloat(standing.points),
      wins: parseInt(standing.wins, 10),
      nationality: standing.Driver.nationality,
      constructor: standing.Constructors.slice(-1)[0].name
    })),
    season: standings.season,
    round: parseInt(standings.round, 10)
  };
};

const driverStandings = async () => {
  try {
    if (process.env.TEST_MODE) {
      return await fetchStandings();      
    } else {
      return await cache.wrap('driverStandings', async () => {
        return await fetchStandings();
      });
    }
  } catch (error) {
    throw new Error(`Could not fetch standings: ${error}`);
  }
};

module.exports = driverStandings;
