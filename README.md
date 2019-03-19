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

[![CircleCI](https://img.shields.io/circleci/project/github/jameswillock/prost/master.svg)](https://circleci.com/gh/jameswillock/prost) [![Version](https://img.shields.io/npm/v/prost.svg)](https://www.npmjs.com/package/prost) [![MIT](https://img.shields.io/github/license/jameswillock/prost.svg)](https://github.com/jameswillock/prost/blob/master/LICENSE) [![Test Coverage](https://api.codeclimate.com/v1/badges/b687ee4cb4f2156fdd91/test_coverage)](https://codeclimate.com/github/jameswillock/prost/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/b687ee4cb4f2156fdd91/maintainability)](https://codeclimate.com/github/jameswillock/prost/maintainability)

## Description
Fetch and display the current Formula 1 driver standings.

<img src="screenshot.png" width="818">

## Installation
Prost is available via `npm` – merely `npm install -g prost`.

The `-c` flag will fetch and return constructor standings.

The `-d` flag (default) will fetch and return driver standings.

## Credits
- [Ergast Developer API](https://ergast.com/mrd/) – Motor Racing Developer API.
- [`axios`](https://github.com/axios/axios) – HTTP client.
- [`cli-table3`](https://github.com/cli-table/cli-table3) – Unicode tables for the command line.

## Drawbacks
- Does not support previous rounds or seasons.
- No caching, so will make an API request on every run.
