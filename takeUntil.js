const takeUntil = function(array, callback) {
  let results = [];
  for (const item of array) {
      if(callback(item)) {
        break;
      } else {
        results.push(item);
      }
  }
  return results;
};
module.exports = takeUntil;