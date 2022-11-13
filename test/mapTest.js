const assert = require("chai").assert;
const map = require("../map");

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];

  it('returns ["g", "c", "t", "m", "t"] for (word) => word[0]', () => {
    assert.deepEqual(
      map(words, (word) => word[0]),
      ["g", "c", "t", "m", "t"]
    );
  });

  it('returns ["gg", "cc", "tt", "mm", "tt"] for (word) => word[0] + word[0]', () => {
    assert.deepEqual(
      map(words, (word) => word[0] + word[0]),
      ["gg", "cc", "tt", "mm", "tt"]
    );
  });

  it("returns [2, 4, 6, 8] for (num) => num * 2)", () => {
    assert.deepEqual(
      map([1, 2, 3, 4], (num) => num * 2),
      [2, 4, 6, 8]
    );
  });
});