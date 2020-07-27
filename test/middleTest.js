const assert = require("chai").assert;
const middle = require("../middle");

describe("Validating middle function", () => {
  it("Array length of 1 should return empty array", () =>{
    assert.deepEqual(middle([1]), []);
  });
  it("Array length less tan 3 should return empty array", () => {
    assert.deepEqual(middle([1,2]), []);
  });
  it("[1, 2, 3] should === [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("[1, 2, 3, 4, 5] should === [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });  
  it("[1, 2, 3, 4] should === [2,3]", () =>{
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });
  it("[1, 2, 3, 4, 5, 6] should === [3,4]",  () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); 
  });
});