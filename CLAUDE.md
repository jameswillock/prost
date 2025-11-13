# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Prost is a command-line tool that fetches and displays Formula 1 driver and constructor standings. It's a Node.js ES module application that uses the Ergast API (via jolpi.ca proxy) to fetch F1 data and displays it in formatted tables.

## Development Commands

### Testing
```bash
npm test                    # Run all tests with coverage (uses nyc + mocha)
npx mocha test/lib/driverStandings.test.js    # Run a single test file
```

### Linting & Formatting
```bash
npm run lint               # Run ESLint
npm run prettier           # Check formatting with Prettier
```

### Running the CLI
```bash
npm run prost              # Run the CLI locally (alias for ./index.js)
./index.js -d              # Show driver standings (default)
./index.js -c              # Show constructor standings
./index.js -y 2019         # Show standings for a specific year
```

## Architecture

### Entry Point
- `index.js`: CLI entry point using Commander.js for argument parsing. Calls the appropriate standings fetcher and table formatter based on flags.

### Data Flow Pattern
The application follows a consistent pattern for both drivers and constructors:
1. **API Client** (`lib/axios.js`): Configured axios instance pointing to the Ergast F1 API
2. **Data Fetchers** (`lib/driverStandings.js`, `lib/constructorStandings.js`):
   - Fetch data from API endpoints
   - Transform raw API responses into normalized objects
   - Implement persistent caching using `keyv` and `keyv-file`
3. **Table Formatters** (`lib/driverTable.js`, `lib/constructorTable.js`): Format standings data using `cli-table3` for display

### Caching Strategy
Each fetcher uses `Keyv` with `keyv-file` for persistent file-based caching:
- **Storage**: Separate JSON files in `.cache/` directory (`.cache/prost-drivers.json` and `.cache/prost-constructors.json`)
- **TTL**: 1 hour (3600000ms) per request
- **Namespaces**: Unique namespaces (`drivers`, `constructors`) to prevent cache key collisions
- **Persistence**: Cache survives between CLI sessions
- Cache implementation pattern:
  ```javascript
  const cached = await cache.get(cacheKey);
  if (cached) return cached;
  const data = await fetchFunction(year);
  await cache.set(cacheKey, data);
  return data;
  ```

### Testing
Tests use:
- Mocha as test runner
- Chai for assertions (with chai-as-promised for async)
- axios-mock-adapter to mock HTTP requests
- JSON fixtures in `test/mocks/` directories
- Pattern: Mock axios responses, test both error and success cases

## Important Notes

### ES Modules
This project uses ES modules (`"type": "module"` in package.json):
- Use `.js` extensions in all import statements
- Use `import` syntax, not `require()`
- JSON imports use `with { type: "json" }` syntax (as seen in tests)

### API Changes
The project recently migrated from `ergast.com` to `api.jolpi.ca/ergast/f1/` due to API deprecation. When working with API endpoints, use the configured axios instance from `lib/axios.js`.

### Publishing
The package is published to GitHub Packages (`@jameswillock/prost`), not npm public registry. See `publishConfig` in package.json.
