const tail = function(test) {
  if (!test || test.length < 2) {
    return [];
  }
  return test.slice(1);
};
module.exports = tail;
