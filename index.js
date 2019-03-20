#! /usr/bin/env node

const constructorStandings = require('./lib/constructorStandings');
const constructorTable = require('./lib/constructorTable');
const driverStandings = require('./lib/driverStandings');
const driverTable = require('./lib/driverTable');
const program = require('commander');

program
  .version('0.0.3')
  .option('-d, --drivers', 'Driver standings')
  .option('-c, --constructors', 'Constructor standings')
  .parse(process.argv);
  
(async () => {
  if (program.drivers || (!program.drivers && !program.constructors)) {
    console.log(driverTable(await driverStandings()));
  }

  if (program.constructors) {
    console.log(constructorTable(await constructorStandings()));
  }
})();
