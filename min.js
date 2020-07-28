const min = function(numbers) {
  // Write code here that returns the smallest value in numbers
  let smallest = numbers[0];
  for (let number  of numbers) {
    if (number < smallest) {
      smallest = number;
    }
  }
  return smallest;
};
module.exports = min;