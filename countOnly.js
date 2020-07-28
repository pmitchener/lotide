// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let obj = {};
  if (!allItems || !Array.isArray(allItems) || allItems.length === 0) {
    return obj;
  }
  if (!itemsToCount) {// || Object.keys(itemsToCount).length === 0) {
    return obj;
  }
  for (let item of allItems) {
    if (itemsToCount[item]) {
      obj[item] ? obj[item]++ : obj[item] = 1;
    }
  }
  return obj;
};
module.exports = countOnly;