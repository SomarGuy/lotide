//Completed findKey
const findKey = (obj, cal) => {
  for (let key in obj) {
    if (cal(obj[key])) {
      return key;
    }
  }
  return undefined;
}; 

module.exports = findKey;
