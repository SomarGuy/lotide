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
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`🛑🛑🛑: These arrays are not equal: ${arrOne} !== ${arrTwo}`);
  } else {
    console.log(`✅✅✅: These arrays are equal; ${arrOne} === ${arrTwo}`);
  }
};

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