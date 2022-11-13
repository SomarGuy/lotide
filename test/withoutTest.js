const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it("returns [2, 3] when passing [1] to [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1', '2'] when passing [1, 2, '3'] from ['1', '2', '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});