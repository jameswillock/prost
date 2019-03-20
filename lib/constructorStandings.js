const axios = require('./axios');
const cache = require('./cache');

const fetchStandings = async () => {
  const response = await axios.get('constructorstandings.json');
  const standings = response.data.MRData.StandingsTable.StandingsLists[0];

  return { 
    table: standings.ConstructorStandings.map(standing => ({
      position: parseInt(standing.position, 10),
      points: parseFloat(standing.points),
      wins: parseInt(standing.wins, 10),
      constructor: standing.Constructor.name,
      nationality: standing.Constructor.nationality

    })),
    season: standings.season,
    round: parseInt(standings.round, 10)
  };
};

const constructorStandings = async () => {
  try {
    if (process.env.TEST_MODE) {
      return await fetchStandings();      
    } else {
      return await cache.wrap('constructorStandings', async () => {
        return await fetchStandings();
      });
    }
  } catch (error) {
    throw new Error(`Could not fetch standings: ${error}`);
  }
};

module.exports = constructorStandings;
