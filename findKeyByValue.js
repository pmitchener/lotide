const assertEqual = function(actual, expected) {
  const passEmoji =  String.fromCodePoint(0x2705);
  const failEmoji = '\u1F923';
  actual === expected ? console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`) : console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = (objInput, strVal) =>
{
  for (key in objInput) {
    if (objInput[key] === strVal) {
      return key;
    }
  }
};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);