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

const takeUntil = (array, callback) => {
  const returnArr = [];
  for (const item of array) {
    if (!callback(item)) {
      returnArr.push(item);
    } else {
      return returnArr;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);