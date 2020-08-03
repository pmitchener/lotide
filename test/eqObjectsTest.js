const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("Validating eqObjects", () => {
  it("Validate eqObjects with no input returns false", () => {
    assert.strictEqual(eqObjects(), false);
  });
  it("Validate two objects with different number of keys, return false", () => {
    const cd = { c: "1", d: ["2", 3], e: "john"};
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
  it("Validate to object with identical keys but different values, return false", () => {
    const cd = { c: "1", d: ["2", 3], e: "john"};
    const cd2 = { c: "1", d: ["2", 3], e: "Michael"};
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
  it("Validate two objects keys and values matches, return true", () => {
    const cd = { c: "1", d: ["2", 3], e: "john"};
    const cd2 = { c: "1", d: ["2", 3], e: "john"};
    assert.strictEqual(eqObjects(cd, cd2), true);
  });
});
