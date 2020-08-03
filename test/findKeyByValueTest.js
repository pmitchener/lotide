const  assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
describe("Validate findKeyByValue function", () => {
  it("findKeyByValue(bestTVShowsByGenre, 'The Wire') => 'drama'", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it("findKeyByValue(bestTVShowsByGenre, 'That 70s Show') => undefined", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, 'That 70s Show'), undefined);
  });
});