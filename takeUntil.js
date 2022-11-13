const takeUntil = (array, callback) => {
  const returnArr = [];
  for (const item of array) {
    if (!callback(item)) {
      returnArr.push(item);
    } else {
      return returnArr;
    }
  }
};

module.exports = takeUntil;