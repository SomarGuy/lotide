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


const middle = function(arr) {
  let newArr = [];
  if (arr.length === 1 || arr.length === 2) {

    return newArr;

  } else if (arr.length % 2 === 0) {
    let evenArr = (arr.length - 1) / 2;

    let intDown = Math.floor(evenArr);
    let intUp = Math.ceil(evenArr);

    newArr.push(arr[intDown]);
    newArr.push(arr[intUp]);

    return newArr;

  } else {

    let oddArr = (arr.length - 1) / 2;
    newArr.push(arr[oddArr]);

    return newArr;
  }
};