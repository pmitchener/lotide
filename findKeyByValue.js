const findKeyByValue = (objInput, strVal) => {
  for (let key in objInput) {
    if (objInput[key] === strVal) {
      return key;
    }
  }
};
module.exports = findKeyByValue;