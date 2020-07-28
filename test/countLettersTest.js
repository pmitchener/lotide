const assert = require("chai").assert;
//const countLetters = require('../countLetters');
const _ = require('../index');

describe("Validating counLetters function", () => {
  it("Validate undefined input, return empty object", () => {
    assert.deepEqual(_.countLetters(), {});
  });
  it("Validate empty string, returns empty object",  () => {
    assert.deepEqual(_.countLetters(''), {});
  });
  it("Validate string with spaces, returns empty object",  () => {
    assert.deepEqual(_.countLetters('           '), {});
  });
  it("Validate stirng input return object with the  character as keys and value representing the count of that key",  () => {
    assert.deepEqual(_.countLetters('lighthouse in the house'), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});