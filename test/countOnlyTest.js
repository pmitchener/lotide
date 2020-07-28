
const assert = require("chai").assert;
const countOnly = require('../countOnly');

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
describe("Validating countOnly function", () => {
  it("Validate input array undefined, return empty object", () => {
    const firstNames = undefined;
    const whatToCount = { "Jason": true, "Karima": true, "Fang": true};
    assert.deepEqual(countOnly(firstNames, whatToCount), {});
  });
  it("Validate input array not an array, returns empty object", () => {
    const firstNames = "this is not an array";
    const whatToCount = { "Jason": true, "Karima": true, "Fang": true};
    assert.deepEqual(countOnly(firstNames, whatToCount), {});
  });
  it("Validate input array length === 0, returns empty object", () => {
    const firstNames = [];
    const whatToCount = { "Jason": true, "Karima": true, "Fang": true};
    assert.deepEqual(countOnly(firstNames, whatToCount), {});
  });
  it("Validate itemsToCount object undefined, returns empty object", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const whatToCount = undefined;
    assert.deepEqual(countOnly(firstNames, whatToCount), {});
  });
  /*it("Validate itemsToCount !== 'object', returns empty object", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const whatToCount = ['this is not an object'];
    assert.deepEqual(countOnly(firstNames, whatToCount), {});
  });*/
  it("Validate itemsToCount.keys.length === 0, returns empty object", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const whatToCount = {};
    assert.deepEqual(countOnly(firstNames, whatToCount), {});
  });
  it("Validate propber input array and proper itemsToCount object returns object with count of inputs specified", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const whatToCount = { "Jason": true, "Karima": true, "Fang": true};
    assert.deepEqual(countOnly(firstNames, whatToCount), {Jason: 1, Fang: 2});
  });
});