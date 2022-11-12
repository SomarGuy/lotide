const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];
  it("returns {jason: 1, Fang: 2, Agouhanna: 1}, for { Jason: true, Karima: true, Fang: true, Agouhanna: true}", () => {
    assert.deepEqual(
      countOnly(firstNames, {
        Jason: true,
        Karima: true,
        Fang: true,
        Agouhanna: true,
      }),
      { Jason: 1, Fang: 2, Agouhanna: 1 }
    );
  });
});