const assertEqual = function(actual, expected) {
  if (actual !== expected) (
    console.log(`🛑🛑🛑Assertion Failed ${actual} !== ${expected}`)
  ); else if (actual === expected) (
    console.log(`✅✅✅Assertion Passed ${actual} === ${expected}`)
  );
};

const countLetters = function(str) {
  const results = {};
  for (const letter of str) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

console.log(countLetters("LHL is the best"));
const checkString = "LHL is the best";
const resultCheck = countLetters(checkString);
assertEqual(resultCheck['s'], 2); //Passes
assertEqual(resultCheck['L'], 2); //Passes
assertEqual(resultCheck['e'], 3); //Fails