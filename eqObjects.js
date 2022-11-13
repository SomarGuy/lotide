const eqArrays = require("./eqArrays");

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
};

module.exports = eqObjects;