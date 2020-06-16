const axios = require("./axios");
const cache = require("./cache");

const fetchStandings = async () => {
  const response = await axios.get("constructorstandings.json");
  const standings = response.data.MRData.StandingsTable.StandingsLists[0];

  return {
    table: standings.ConstructorStandings.map((standing) => ({
      position: parseInt(standing.position, 10),
      points: parseFloat(standing.points),
      wins: parseInt(standing.wins, 10),
      constructor: standing.Constructor.name,
      nationality: standing.Constructor.nationality,
    })),
    season: standings.season,
    round: parseInt(standings.round, 10),
  };
};

const constructorStandings = async () => {
  return await cache("constructorStandings", fetchStandings);
};

module.exports = constructorStandings;
