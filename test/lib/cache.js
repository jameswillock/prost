const cache = require('../../lib/cache');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
chai.use(require('chai-as-promised'));
const testMode = process.env.TEST_MODE;

describe('cache()', () => {
  after(() => process.env.TEST_MODE = testMode);

  context('When test mode is enabled', () => {
    before(() => process.env.TEST_MODE = 'true');
    it('Calls the underlying function', async () => {
      let callback = sinon.fake();
      await cache('key', callback);
      expect(callback.calledOnce).to.be.true;
    });
  });

  context('When test mode is disabled', () => {
    before(() => process.env.TEST_MODE = 'false');
    it('Calls the filesystem cache', async () => {
      let callback = sinon.fake();
      await cache('key', callback);
      expect(callback.calledOnce).to.be.true;
    });
  });
});
