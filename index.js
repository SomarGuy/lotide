const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const AssertArraysEqual  = require('./assertArraysEqual');
const AssertEqual = require('./assertEqual');
const AssertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  AssertArraysEqual,
  AssertEqual,
  AssertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without
};