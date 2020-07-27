// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  const passEmoji =  '';
  const failEmoji = '';
  eqObjects(actual, expected) ? 
        console.log(`${passEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`${failEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) {
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
      }
      else {
        return false;
      }
    } 
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
const eqArrays = (list1, list2) => {
  if(list1.length !== list2.length) {
    return false;
  }
  for (let i = 0; i < list1.length; i++) {
    if(list1[i] !== list2[i]) {
      return false;
    }
  }
  return true;
};
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2, ar: [1,2,3]}, { b: 2, a: '1', ar: [1,2,3] });