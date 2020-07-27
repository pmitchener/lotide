//could not get emojis to work.
const assertEqual = function(actual, expected) {
  const passEmoji =  '';
  const failEmoji = '';  
  actual === expected ? console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`) : console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
};
module.exports = assertEqual;