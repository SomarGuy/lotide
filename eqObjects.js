const assertEqual = function(actual, expected) {
  if (actual !== expected) (
    console.log(`🛑🛑🛑Assertion Failed ${actual} !== ${expected}`)
  ); else if (actual === expected) (
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

const ab = { a: '1', b: '2'};
const ba = { b: '2', a: '1'};
const abc = { a: '1', b: '2', c: '3'};
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1'};
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: '1', d: ['2', 3, 4] };
assertEqual(eqObjects(cd, cd2), false);