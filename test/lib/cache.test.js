import cache from "../../lib/cache.js";
import { use, expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
use(chaiAsPromised);
import sinon from 'sinon';
import fs from 'fs/promises';
import crypto from 'crypto';

const randomKey = () => crypto.randomBytes(12).toString("hex");

describe("cache()", () => {
  const cacheDirectory = ".cache",
    key = "hello",
    value = "world",
    ciMode = process.env.CI;

  context("testmode on", () => {
    before(() => (process.env.CI = "true"));
    after(() => (process.env.CI = ciMode));

    it("Returns the set value", async () => {
      const callback = sinon.fake.resolves(value);
      const cached = await cache(key, callback);
      expect(cached).to.be.equal(value);
    });

    it("does not write to disk", async () => {
      const existingCacheCount = await fs.readdir(cacheDirectory).length;
      await cache(randomKey(), () => value);
      const newCacheCount = await fs.readdir(cacheDirectory).length;
      expect(existingCacheCount).to.eq(newCacheCount);
    });
  });

  context("testmode off", () => {
    before(() => (process.env.CI = "false"));
    after(() => (process.env.CI = ciMode));

    it("Returns the set value", async () => {
      const callback = sinon.fake.resolves(value);
      const cached = await cache(key, callback);
      expect(cached).to.be.equal(value);
    });

    it("writes to disk", async () => {
      const existingCache = await fs.readdir(cacheDirectory);
      await cache(randomKey(), () => value);
      const newCache = await fs.readdir(cacheDirectory);
      expect(newCache.length).to.eq(existingCache.length + 1);
    });
  });
});
