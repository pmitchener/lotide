const assertEqual = function(actual, expected) {
  const passEmoji =  '✅✅✅';
  const failEmoji = '🛑🛑🛑';
  actual === expected ? console.log(`${passEmoji} Assertion Passed: ${actual} === ${expected}`) : console.log(`${failEmoji} Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (sentence) => {
  let obj = {}
  for (char of sentence) {
    if (char === " ") {
      continue;
    }
    obj[char] ? obj[char]++ : obj[char] = 1;
  }
  return obj;
};
//console.log(countLetters("lighthouse in the house"));
let result = countLetters("lighthouse in the house");
assertEqual(result["t"], 2);
assertEqual(result["e"], 3);
assertEqual(result["o"], 2);