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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }
    results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i];
  }  
  return results;
};
let arr = letterPositions("hello");
assertArraysEqual(arr["h"], [0]);
assertArraysEqual(arr["e"], [1]);
assertArraysEqual(arr["l"], [2,3]);
assertArraysEqual(arr["o"], 4);
//console.log(letterPositions("lighthouse in the house"));