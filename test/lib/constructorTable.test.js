const driverTable = require("../../lib/constructorTable");

const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-as-promised"));

const standings = require("../mocks/constructorStandings/standings");

describe("constructorTable()", () => {
  let table;

  before(() => (table = driverTable(standings)));

  it("Renders a string", () => {
    expect(table).to.be.a("string");
  });

  it("Contains the title", () => {
    expect(table).to.include("Formula 1 2019: Round 1");
  });

  it("Contains the headers", () => {
    ["#", "Team", "Wins", "Points"].forEach((header) => {
      expect(table).to.include(header);
    });
  });

  it("Contains the teams", () => {
    [
      "Mercedes",
      "Ferrari",
      "Red Bull",
      "Haas F1 Team",
      "Renault",
      "Alfa Romeo",
      "Racing Point",
      "Toro Rosso",
      "McLaren",
      "Williams",
    ].forEach((driver) => {
      expect(table).to.include(driver);
    });
  });
});
