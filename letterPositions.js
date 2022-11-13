const letterPositions = function(str) {
  const results = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letter !== ' ') {
      if (!Array.isArray(results[letter])) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
  }
  return results;
}

module.exports = letterPositions;