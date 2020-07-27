const assert = require("chai").assert;
const tail = require("../tail");

describe("Validating tail function", () =>{
  it("If array is null or undefined should return empty array.", () => {
    assert.deepEqual(tail(), []);
  });
  it("If array is empty should return empty array.", () => {
    assert.deepEqual(tail([]), []);
  });  
  it("If array length < 2 should return empty array.", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("Given array of length should return arry of length -1", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});
