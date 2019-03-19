const axios = require('./axios');

const driverStandings = async () => {
  try {
    const response = await axios.get('driverStandings.json');
    const standings = response.data.MRData.StandingsTable.StandingsLists[0];

    return { 
      table: standings.DriverStandings.map(standing => ({
        givenName: standing.Driver.givenName,
        familyName: standing.Driver.familyName,
        position: parseInt(standing.position, 10),
        points: parseInt(standing.points, 10),
        wins: parseInt(standing.wins, 10),
        nationality: standing.Driver.nationality,
        constructor: standing.Constructors.slice(-1)[0].name
      })),
      season: standings.season,
      round: parseInt(standings.round, 10)
    };
  } catch (error) {
    throw new Error(`Could not fetch standings: ${error}`);
  }
};

module.exports = driverStandings;
