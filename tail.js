const assertEqual = function(actual, expected) {
  const passEmoji =  '';
  const failEmoji = '';   
  actual === expected ? console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`) : console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
};
const tail = function(test) {
  if (!test) {
    return;
  }
  if (test.length === 1) {
    return;
  }
  return test.slice(0);
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
