const cacheManager = require('cache-manager');
const fsStore = require('cache-manager-fs-hash');
const fsCache = cacheManager.caching({
  store: fsStore,
  options: { path: '.cache', ttl: 60 * 60 }
});

const cache = async (key, call) => {
  if (process.env.TEST_MODE === 'true') {
    return await call();
  }

  return await fsCache.wrap(key, async () => await call());
};

module.exports = cache;
