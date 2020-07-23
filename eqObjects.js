const assertEqual = function(actual, expected) {
  const passEmoji =  String.fromCodePoint(0x2705);
  const failEmoji = '\u1F923';
  actual === expected ? console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`) : console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false