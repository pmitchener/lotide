const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

//const results1 = map(words, word => word[0]);
//console.log(results1);
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);