const assertEqual = function(actual, expected) {
  const passEmoji =  '✅✅✅';
  const failEmoji = '🛑🛑🛑';
  actual === expected ? console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`) : console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
};
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let obj = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      obj[item] ? obj[item]++ : obj[item] = 1;
    }
  }
  return obj;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);