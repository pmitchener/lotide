const  assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("letterPositions function", () => {
  it("letterPositions('hello') => { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }", () => {
    assert.deepEqual(letterPositions('hello'), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });
  it("letterPositions('')", () => {
    assert.deepEqual(letterPositions(''), {});
  });
});
