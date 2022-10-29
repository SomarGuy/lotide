//assertEqual function to test our code
const assertEqual = function(actual, expected) {
  if (actual !== expected) (
    console.log(`🛑🛑🛑Assertion Failed ${actual} !== ${expected}`)
  ); else if (actual === expected) (
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected}`)
  );
};
//Completed findKey
const findKey = (obj, cal) => {
  for (const key in obj) {
    if (cal(obj[key])); {
      return key;
    }
  }
}; 


// TEST CODE:
const resultsOne = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

const resultsTwo = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3); // => "elBulli"
const resultsThree = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 0); // => "Blue Hill"
assertEqual(resultsOne, "noma");
assertEqual(resultsTwo, "elBulli");
assertEqual(resultsThree, "Blue Hill");
