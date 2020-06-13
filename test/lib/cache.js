const cache = require('../../lib/cache');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
chai.use(require('chai-as-promised'));
const fs = require('fs').promises;
const crypto = require('crypto');

const randomKey = () => crypto.randomBytes(12).toString('hex');

describe('cache()', () => {
  const cacheDirectory = '.cache',
    key = 'hello',
    value = 'world',
    testMode = process.env.TEST_MODE;

  context('testmode on', () => {
    before(() => process.env.TEST_MODE = 'true');
    after(() => process.env.TEST_MODE = testMode);

    it('Returns the set value', async () => {
      const callback = sinon.fake.resolves(value);
      const cached = await cache(key, callback);
      expect(cached).to.be.equal(value);
    });

    it('does not write to disk', async () => {
      const existingCacheCount = await fs.readdir(cacheDirectory).length;
      await cache(randomKey(), () => value);
      const newCacheCount = await fs.readdir(cacheDirectory).length;
      expect(existingCacheCount).to.eq(newCacheCount);
    });
  });

  context('testmode off', () => {
    before(() => process.env.TEST_MODE = 'false');
    after(() => process.env.TEST_MODE = testMode);

    it('Returns the set value', async () => {
      const callback = sinon.fake.resolves(value);
      const cached = await cache(key, callback);
      expect(cached).to.be.equal(value);
    });

    it('writes to disk', async () => {
      const existingCache = await fs.readdir(cacheDirectory);
      await cache(randomKey(), () => value);
      const newCache = await fs.readdir(cacheDirectory);
      expect(newCache.length).to.eq(existingCache.length + 1);
    });
  });
});
