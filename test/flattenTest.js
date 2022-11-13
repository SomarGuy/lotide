const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [4, 7, 1, 2, 9, 0] for [[4, 7, 1], 2, [9, 0]]", () => {
    assert.deepEqual(flatten([[4, 7, 1], 2, [9, 0]]), [4, 7, 1, 2, 9, 0]);
  });
});