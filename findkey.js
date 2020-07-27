const assertEqual = function(actual, expected) {
  const passEmoji =  '';
  const failEmoji = '';
  actual === expected ? console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`) : console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
};
const findKey = (obj, callback) => {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};
const tst = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
assertEqual(tst, "noma");