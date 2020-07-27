const tail = function(test) {
  if (!test) {
    return;
  }
  if (test.length === 1) {
    return;
  }
  return test.slice(0);
};
module.exports = tail;
