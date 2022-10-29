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

const map = (array, callback) => {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
}

const words = ["ground", "control", "to", "major", "tom"];
const resultOne = map(words, word => word[0]);
assertArraysEqual(resultOne, [ 'g', 'c', 't', 'm', 't']);

const resultTwo = map(words, word => word.toUpperCase());
assertArraysEqual(resultTwo, [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 't']);
