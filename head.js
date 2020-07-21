const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`Assertion Passed: ${actual} === ${expected}`) : console.log(`Assertion Failed: ${actual} !== ${expected}`);
};
const head = function(test){
  if(!test)
  {
    return
  }
  return test[0];
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(), 5);