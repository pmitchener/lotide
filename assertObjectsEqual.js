const eqObjects = require('./eqObjects');
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  const passEmoji =  '';
  const failEmoji = '';
  eqObjects(actual, expected) ? 
        console.log(`${passEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`${failEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};
module.exports = assertObjectsEqual;