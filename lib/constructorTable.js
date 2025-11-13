// const Table = require("cli-table3");
import Table from 'cli-table3'

const constructorTable = (standings) => {
  const table = new Table({
    style: {
      border: ['white'],
    },
  })

  table.push(
    [
      {
        colSpan: 4,
        hAlign: 'center',
        content: `Formula 1 ${standings.season}: Round ${standings.round}`,
      },
    ],
    ['#', 'Team', 'Wins', 'Points'],
  )

  standings.table.forEach((standing) => {
    table.push([
      standing.position,
      standing.constructor,
      standing.wins,
      standing.points,
    ])
  })

  return table.toString()
}

export default constructorTable
