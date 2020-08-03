const  assert = require('chai').assert;
const flatten = require('../flatten');

describe("Testing the flatten function", () => {
  it("flatten([1, 2, [3, 4], 5, [6]]) => [1, 2, 3, 4, 5, 6]", () => {
    const result = flatten([1, 2, [3, 4], 5, [6]]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });
  it("flatten([1, 2, 3, 4, 5, 6]) => [1, 2, 3, 4, 5, 6]", () => {
    const result = flatten([1, 2, [3, 4], 5, [6]]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });
  it("flatten([]) => []", () => {
    assert.deepEqual(flatten([]), []);
  });
});
