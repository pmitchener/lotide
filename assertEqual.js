//could not get emojis to work.
const assertEqual = function(actual, expected) {
  const passEmoji =  String.fromCodePoint(0x2705);
  const failEmoji = '\u1F923';
  actual === expected ? console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`) : console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(3+4, 6);
assertEqual(10+2 , 12);