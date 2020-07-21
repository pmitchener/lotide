const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`Assertion Passed: ${actual} === ${expected}`) : console.log(`Assertion Failed: ${actual} !== ${expected}`);
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
