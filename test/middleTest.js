const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('#middle', () => {
  it("returns [] for [1, 2] & []", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('Returns one middle element for an array with an odd number of elements', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});

/*
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4]), [4]);
*/