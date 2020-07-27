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

const without = (source, itemstoRemove) => {
  let newArray = [];
  for(let x = 0; x < source.length; x++) {
    let itemPassed = true;
    for(let y = 0; y < itemstoRemove.length; y++) {
      if(source[x] === itemstoRemove[y]) {
        itemPassed = false;
        break;
      }
    }
    if (itemPassed) {
      newArray.push(source[x]);
    }
  }
  return newArray;
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);