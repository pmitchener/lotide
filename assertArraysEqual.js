const assertArraysEqual = function(list1, list2) {
  const passEmoji =  String.fromCodePoint(0x2705);
  const failEmoji = '\u1F923';
  eqArrays(list1, list2) ? console.log(`${passEmoji} Assertion Passed`) : console.log(`${failEmoji} Assertion Failed`);
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
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false