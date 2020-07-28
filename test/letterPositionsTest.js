const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

let arr = letterPositions("hello");
assertArraysEqual(arr["h"], [0]);
assertArraysEqual(arr["e"], [1]);
assertArraysEqual(arr["l"], [2,3]);
assertArraysEqual(arr["o"], 4);
//console.log(letterPositions("lighthouse in the house"));