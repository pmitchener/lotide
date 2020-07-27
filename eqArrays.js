const assertEqual = function(actual, expected) {
  const passEmoji =  '';
  const failEmoji = '';
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
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false