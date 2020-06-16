const Table = require("cli-table3");

const driverTable = (standings) => {
  const table = new Table({
    style: {
      border: ["white"],
    },
  });

  table.push(
    [
      {
        colSpan: 5,
        hAlign: "center",
        content: `Formula 1 ${standings.season}: Round ${standings.round}`,
      },
    ],
    ["#", "Driver", "Team", "Wins", "Points"]
  );

  standings.table.forEach((standing) => {
    table.push([
      standing.position,
      `${standing.givenName} ${standing.familyName}`,
      standing.constructor,
      standing.wins,
      standing.points,
    ]);
  });

  return table.toString();
};

module.exports = driverTable;
