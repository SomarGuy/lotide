const assertEqual = function(actual, expected) {
  if (actual !== expected) (
    console.log(`🛑🛑🛑Assertion Failed ${actual} !== ${expected}`)
  ); else if (actual === expected) (
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected}`)
  );
};

assertEqual("Bootcamps", "Bootcamp");
assertEqual(2, 1);