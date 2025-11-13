import axios from './axios.js';
import Keyv from 'keyv';
import { KeyvFile } from 'keyv-file';

const cache = new Keyv({
  store: new KeyvFile({ filename: '.cache/prost-constructors.json' }),
  namespace: 'constructors',
  ttl: 60 * 60 * 1000, // 1 hour in milliseconds
});

const fetchConstructorStandings = async (year) => {
  const response = await axios.get(`${year}/constructorstandings/`);
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

const constructorStandings = async (year) => {
  const cacheKey = String(year);
  const cached = await cache.get(cacheKey);

  if (cached) {
    return cached;
  }

  const data = await fetchConstructorStandings(year);
  await cache.set(cacheKey, data);
  return data;
};

export default constructorStandings;
