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
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const words = ["ground", "control", "to", "major", "tom"];

//const results1 = map(words, word => word[0]);
//console.log(results1);
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);