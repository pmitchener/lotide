const assert = require("chai").assert;
const countLetters = require('../countLetters');

describe("Validating counLetters function", () => {
  it("Validate undefined input, return empty object", () => {
    assert.deepEqual(countLetters(), {});
  });
  it("Validate empty string, returns empty object",  () => {
    assert.deepEqual(countLetters(''), {});
  });
  it("Validate string with spaces, returns empty object",  () => {
    assert.deepEqual(countLetters('           '), {});
  });
  it("Validate stirng input return object with the  character as keys and value representing the count of that key",  () => {
    assert.deepEqual(countLetters('lighthouse in the house'), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});