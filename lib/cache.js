const cacheManager = require('cache-manager');
const fsStore = require('cache-manager-fs-hash');
const cache = cacheManager.caching({
  store: fsStore,
  options: { path: '.cache', ttl: 60 * 60 }
});

module.exports = cache;
