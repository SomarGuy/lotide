const without = function(source, itemsToRemove) {
  let modifiedArr = [];

  for (let i = 0; i < source.length; i++) {
    let remove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        remove = true;
      }
    }
    if (!remove) {
      modifiedArr.push(source[i]);
    }
  }
  return modifiedArr;
};

module.exports = without;