const without = (source, itemstoRemove) => {
  let newArray = [];
  for(let x = 0; x < source.length; x++) {
    let itemPassed = true;
    for(let y = 0; y < itemstoRemove.length; y++) {
      if(source[x] === itemstoRemove[y]) {
        itemPassed = false;
        break;
      }
    }
    if (itemPassed) {
      newArray.push(source[x]);
    }
  }
  return newArray;
};
module.exports = without;