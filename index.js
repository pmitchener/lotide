const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
//const eqObjects = require('./eqObjects');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const map = require('./map');
const reverse = require('./reverse');
const takeUntil = require('./takeUntil');
const without = require('./without');
const flatten = require('./flatten');

module.exports = {
  head,
  tail,
  middle,
  findKey,
  findKeyByValue,
  letterPositions,
  //eqObjects: eqObjects,
  countLetters,
  countOnly,
  map,
  reverse,
  takeUntil,
  without,
  flatten
};