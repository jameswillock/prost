#! /usr/bin/env node

import constructorStandings from './lib/constructorStandings.js'
import constructorTable from './lib/constructorTable.js'
import driverStandings from './lib/driverStandings.js'
import driverTable from './lib/driverTable.js'
import { Command } from 'commander'

const program = new Command()

const year = new Date().getFullYear()

program
  .name('prost')
  .version('0.0.8')
  .description('CLI for Formula 1 standings')
  .option('-y, --year <year>', 'Season year', year)
  .option('-d, --drivers', 'Driver standings')
  .option('-c, --constructors', 'Constructor standings')
  .parse(process.argv);

(async () => {
  if (program.opts().constructors) {
    const standings = await constructorStandings(program.opts().year)
    console.log(constructorTable(standings))
  }
  else {
    const standings = await driverStandings(program.opts().year)
    console.log(driverTable(standings))
  }
})()
