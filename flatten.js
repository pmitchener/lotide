const assertArraysEqual = function(list1, list2) {
  const passEmoji =  '';
  const failEmoji = '';
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

const flatten = (listOfList) => {
  let newArray = [];
  for (let list of listOfList) {
    if (Array.isArray(list)) {
      for (let word of list) {
        newArray.push(word);
      }
    }
    else {
      newArray.push(list);
    }
  }
  return newArray;
};
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),  [1, 2, 3, 4, 5, 6]);// => [1, 2, 3, 4, 5, 6]