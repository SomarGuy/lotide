const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const inputArray = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(inputArray), ["Lighthouse", "Labs"]);
  });

  it("returns [6, 7] for [5, 6, 7]", () => {
    const inputArray = [5, 6, 7]
    assert.deepEqual(tail(inputArray), [6, 7]);
  });
});


