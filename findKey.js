const assertEqual = function(actual, expected) {
  if (actual !== expected) (
    console.log(`🛑🛑🛑Assertion Failed ${actual} !== ${expected}`)
  ); else if (actual === expected) (
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected}`)
  );
};

const findKey = (obj, cal) => {
  for (const key in obj) {
    if (cal(obj[key])); {
      return key;
    }
  }
}; 