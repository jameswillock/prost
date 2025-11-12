#! /usr/bin/env node

const constructorStandings = require("./lib/constructorStandings");
const constructorTable = require("./lib/constructorTable");
const driverStandings = require("./lib/driverStandings");
const driverTable = require("./lib/driverTable");
const { Command } = require('commander');
const program = new Command();

const year = new Date().getFullYear()

program
  .name("prost")
  .version("0.0.8")
  .description('CLI for Formula 1 standings')
  .option("-y, --year <year>", "Season year", year)
  .option("-d, --drivers", "Driver standings")
  .option("-c, --constructors", "Constructor standings")
  .parse(process.argv);

(async () => {
  if (program.drivers || (!program.drivers && !program.constructors)) {
    console.log(driverTable(await driverStandings(program.opts().year)));
  }

  if (program.constructors) {
    console.log(constructorTable(await constructorStandings(program.opts().year)));
  }
})();
