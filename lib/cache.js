const cacheManager = require('cache-manager');
const { DiskStore } = require('cache-manager-fs-hash');

const diskCache = cacheManager.createCache(new DiskStore({
  path: '.cache',
  ttl: 60 * 60,
  zip: true,
  hash: true,
}));

const cache = async (key, call, args) => {
  if (process.env.CI === "true") {
    return await call(args);
  }

  return await diskCache.wrap(key, async () => await call(args));
};

module.exports = cache;
