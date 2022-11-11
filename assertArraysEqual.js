const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅✅: These arrays are equal; ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑: These arrays are not equal: ${arrOne} !== ${arrTwo}`);
  }
};

module.exports = assertArraysEqual;