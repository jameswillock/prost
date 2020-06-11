```
 ____                        __
/\  _`\                     /\ \__
\ \ \L\ \_ __   ___     ____\ \ ,_\
 \ \ ,__/\`'__\/ __`\  /',__\\ \ \/
  \ \ \/\ \ \//\ \L\ \/\__, `\\ \ \_
   \ \_\ \ \_\\ \____/\/\____/ \ \__\
    \/_/  \/_/ \/___/  \/___/   \/__/

“I’m not going to leave him even a 1-meter gap.”
```

![Tests](https://github.com/jameswillock/prost/workflows/Tests/badge.svg) [![Version](https://img.shields.io/npm/v/prost.svg)](https://www.npmjs.com/package/prost) [![MIT](https://img.shields.io/github/license/jameswillock/prost.svg)](https://github.com/jameswillock/prost/blob/master/LICENSE) [![Depfu](https://badges.depfu.com/badges/b497d8be1cc358217997d2a3624ba0ae/overview.svg)](https://depfu.com/github/jameswillock/prost?project_id=7502) [![codecov](https://codecov.io/gh/jameswillock/prost/branch/master/graph/badge.svg)](https://codecov.io/gh/jameswillock/prost)

## Description
Fetch and display the current Formula 1 driver standings on the command line.

Example drivers' championship output:

```
┌────────────────────────────────────────────────────────┐
│                Formula 1 2019: Round 21                │
├────┬────────────────────┬──────────────┬──────┬────────┤
│ #  │ Driver             │ Team         │ Wins │ Points │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 1  │ Lewis Hamilton     │ Mercedes     │ 11   │ 413    │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 2  │ Valtteri Bottas    │ Mercedes     │ 4    │ 326    │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 3  │ Max Verstappen     │ Red Bull     │ 3    │ 278    │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 4  │ Charles Leclerc    │ Ferrari      │ 2    │ 264    │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 5  │ Sebastian Vettel   │ Ferrari      │ 1    │ 240    │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 6  │ Carlos Sainz       │ McLaren      │ 0    │ 96     │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 7  │ Pierre Gasly       │ Toro Rosso   │ 0    │ 95     │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 8  │ Alexander Albon    │ Red Bull     │ 0    │ 92     │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 9  │ Daniel Ricciardo   │ Renault      │ 0    │ 54     │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 10 │ Sergio Pérez       │ Racing Point │ 0    │ 52     │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 11 │ Lando Norris       │ McLaren      │ 0    │ 49     │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 12 │ Kimi Räikkönen     │ Alfa Romeo   │ 0    │ 43     │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 13 │ Daniil Kvyat       │ Toro Rosso   │ 0    │ 37     │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 14 │ Nico Hülkenberg    │ Renault      │ 0    │ 37     │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 15 │ Lance Stroll       │ Racing Point │ 0    │ 21     │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 16 │ Kevin Magnussen    │ Haas F1 Team │ 0    │ 20     │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 17 │ Antonio Giovinazzi │ Alfa Romeo   │ 0    │ 14     │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 18 │ Romain Grosjean    │ Haas F1 Team │ 0    │ 8      │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 19 │ Robert Kubica      │ Williams     │ 0    │ 1      │
├────┼────────────────────┼──────────────┼──────┼────────┤
│ 20 │ George Russell     │ Williams     │ 0    │ 0      │
└────┴────────────────────┴──────────────┴──────┴────────┘
```

Example constructors' championship output:

```
┌───────────────────────────────────┐
│     Formula 1 2019: Round 21      │
├────┬──────────────┬──────┬────────┤
│ #  │ Team         │ Wins │ Points │
├────┼──────────────┼──────┼────────┤
│ 1  │ Mercedes     │ 15   │ 739    │
├────┼──────────────┼──────┼────────┤
│ 2  │ Ferrari      │ 3    │ 504    │
├────┼──────────────┼──────┼────────┤
│ 3  │ Red Bull     │ 3    │ 417    │
├────┼──────────────┼──────┼────────┤
│ 4  │ McLaren      │ 0    │ 145    │
├────┼──────────────┼──────┼────────┤
│ 5  │ Renault      │ 0    │ 91     │
├────┼──────────────┼──────┼────────┤
│ 6  │ Toro Rosso   │ 0    │ 85     │
├────┼──────────────┼──────┼────────┤
│ 7  │ Racing Point │ 0    │ 73     │
├────┼──────────────┼──────┼────────┤
│ 8  │ Alfa Romeo   │ 0    │ 57     │
├────┼──────────────┼──────┼────────┤
│ 9  │ Haas F1 Team │ 0    │ 28     │
├────┼──────────────┼──────┼────────┤
│ 10 │ Williams     │ 0    │ 1      │
└────┴──────────────┴──────┴────────┘
```

## Installation
Prost is available via `npm` – merely `npm install -g prost`.

The `-c` flag will fetch and return constructor standings.

The `-d` flag (default) will fetch and return driver standings.

## Credits
- [Ergast Developer API](https://ergast.com/mrd/): Motor Racing Developer API.
- [`axios`](https://github.com/axios/axios): HTTP client.
- [`cli-table3`](https://github.com/cli-table/cli-table3): Unicode tables for the command line.
- [`Commander.js`](https://github.com/tj/commander.js): Utilities for building command line interfaces.
- [`cache-manager`](https://github.com/BryanDonovan/node-cache-manager): Caching backend.

## Drawbacks
- Does not support previous rounds or seasons.
