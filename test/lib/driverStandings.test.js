import driverStandings from "../../lib/driverStandings.js";
import axios from "../../lib/axios.js";
import MockAdapter from "axios-mock-adapter";
import { use, expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
use(chaiAsPromised);
import successfulResponse from "../mocks/driverStandings/successfulResponse.json" with { type: "json" };

describe("driverStandings()", () => {
  let mock;
  before(() => (mock = new MockAdapter(axios)));
  after(() => mock.restore());

  context("when API is unavailable", () => {
    before(() => mock.onGet("driverstandings.json").reply(500, "Error"));

    it("Throws an error", async () => {
      await expect(driverStandings()).to.be.rejectedWith(
        "Request failed with status code 500"
      );
    });
  });

  context("when API is available", () => {
    let standings;

    before(async () => {
      mock.onGet("driverstandings.json").reply(200, successfulResponse);
      standings = await driverStandings();
    });

    it("Return an object", () => {
      expect(standings).to.be.an("object");
    });

    it("Has the correct keys", () => {
      expect(standings).to.have.keys(["table", "season", "round"]);
    });

    it("Returns the correct season", () => {
      expect(standings.season).to.eq("2019");
    });

    it("Returns the correct round", () => {
      expect(standings.round).to.eq(1);
    });

    it("Returns a table with the correct keys", () => {
      standings.table.forEach((standing) => {
        expect(standing).to.have.keys([
          "givenName",
          "familyName",
          "position",
          "points",
          "wins",
          "nationality",
          "constructor",
        ]);
      });
    });

    it("Returns the table with the correct values", () => {
      const standing = standings.table[0];

      expect(standing.givenName).to.eq("Valtteri");
      expect(standing.familyName).to.eq("Bottas");
      expect(standing.position).to.eq(1);
      expect(standing.points).to.eq(26);
      expect(standing.wins).to.eq(1);
      expect(standing.nationality).to.eq("Finnish");
      expect(standing.constructor).to.eq("Mercedes");
    });
  });
});
