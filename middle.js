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

const middle = (list) => {
  /*
  let newArray = [];
  let halfPoint = list.length / 2
  let mid = Math.ceil(halfPoint)
  If list.length is odd
    newArray.push(list[mid -1])
  Else
    newArray.push(list[mid-1])
    newArray.push(list[list.length - mid])
  End if
  Return newArray
  */ 
  if(list.length < 3) {
    return [];
  }
  let newArray = [];
  let mid = Math.ceil(list.length/2);

  newArray.push(list[mid - 1]);
  if (list.length % 2 === 0) {//odd
      newArray.push(list[list.length - mid]); 
  }
  return newArray
};
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]