const assertEqual = function(actual, expected) {
  if (actual !== expected) (
    console.log(`🛑🛑🛑Assertion Failed ${actual} !== ${expected}`)
  ); else (actual === expected) (
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected}`)
  );
};

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
}

const letterPositions = function(str) {
  const results = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letter !== ' ') {
      if (!Array.isArray(results[letter])) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
  }
  return results;
}

console.log(letterPositions('LHL is the best'));
assertArraysEqual(letterPositions('hello').e, [1]);