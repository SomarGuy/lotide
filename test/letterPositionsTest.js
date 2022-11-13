const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPosition", () => {
  it("returns [1] for 'hello'.e", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns [4] for 'hello'.o", () => {
    assert.deepEqual(letterPositions("hello").o, [4]);
  });

  it("returns [2, 3] for 'hello'.l", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
});