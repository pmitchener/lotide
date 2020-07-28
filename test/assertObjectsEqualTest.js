const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2, ar: [1,2,3]}, { b: 2, a: '1', ar: [1,2,3] });