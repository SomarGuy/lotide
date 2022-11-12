const middle = function(arr) {
  let newArr = [];
  if (arr.length === 1 || arr.length === 2) {

    return newArr;

  } else if (arr.length % 2 === 0) {
    let evenArr = (arr.length - 1) / 2;

    let intDown = Math.floor(evenArr);
    let intUp = Math.ceil(evenArr);

    newArr.push(arr[intDown]);
    newArr.push(arr[intUp]);

    return newArr;

  } else {

    let oddArr = (arr.length - 1) / 2;
    newArr.push(arr[oddArr]);

    return newArr;
  }
};

module.exports = middle;