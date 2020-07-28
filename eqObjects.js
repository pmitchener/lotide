const eqArrays = require("./eqArrays");
const eqObjects = function(object1, object2) {
  if (typeof object1 === 'undefined' || typeof object2 === 'undefined') {
    return false;
  }
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (!object2[key]) {
      return false;
    }
    if (Array.isArray(object1[key])) {
      if (Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
module.exports = eqObjects;