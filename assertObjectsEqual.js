const eqObjects = function(objOne, objTwo) {
  if (Object.keys(objOne).length !== Object.keys(objTwo).length) {
    return false;
  }
  for (const key of Object.keys(objOne)) {
    if (Array.isArray(objOne[key]) && Array.isArray(objTwo[key])) {
      if (!eqArrays(objOne[key], objTwo[key])) {
        return false;
      }
    }
    if (objOne[key] instanceof Object && objTwo[key] instanceof Object) {
      if (!eqObjects(objOne[key], objTwo[key])) {
        return false;
      }
    } else {
      if (objOne[key] !== objTwo[key]) {
        return false;
      }
    }
  }
  return true;
}

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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};