const takeUntil = function(array, callback) {
  let results = [];
  for (const item of array) {
      if(callback(item)) {
        break;
      } else {
        results.push(item);
      }
  }
  return results;
}
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
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
//const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]); 