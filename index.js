const driverStandings = require('./lib/driverStandings');
const driverTable = require('./lib/driverTable');

(async () => {
  const standings = await driverStandings();
  const table = driverTable(standings);
  console.log(table);
})();
