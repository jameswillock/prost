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

[![CircleCI](https://img.shields.io/circleci/project/github/jameswillock/prost/master.svg)](https://circleci.com/gh/jameswillock/prost)


## Description
Fetch and display the current Formula 1 driver standings.

<img src="screenshot.png" width="409" height="671">

## Installation
Merely `npm install -g prost`, and then run `prost` whenever you want to see the current season’s driver standings.

## Credits
- [Ergast Developer API](https://ergast.com/mrd/) – Motor Racing Developer API.
- [`axios`](https://github.com/axios/axios) – HTTP client.
- [`cli-table3`](https://github.com/cli-table/cli-table3) – Unicode tables for the command line.

## Drawbacks
- Does not support previous rounds or seasons.
- Does not support constructor standings.
- No caching, so will make an API request on every run.
