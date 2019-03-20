const cache = require('../../lib/cache');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
chai.use(require('chai-as-promised'));

describe('cache()', () => {
  before(() => process.env.TEST_MODE = 'true');

  it('Calls the underlying function', async () => {
    const callback = sinon.fake();
    await cache('key', callback);
    expect(callback.calledOnce).to.be.true;
  });
});
