const eqArrays = require("./eqArrays");
const assertArraysEqual = function(list1, list2) {
  const passEmoji =  '';
  const failEmoji = '';
  eqArrays(list1, list2) ? console.log(`${passEmoji} Assertion Passed`) : console.log(`${failEmoji} Assertion Failed`);
};
module.exports = assertArraysEqual;