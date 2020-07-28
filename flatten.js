const flatten = (listOfList) => {
  let newArray = [];
  for (let list of listOfList) {
    if (Array.isArray(list)) {
      for (let word of list) {
        newArray.push(word);
      }
    }
    else {
      newArray.push(list);
    }
  }
  return newArray;
};
module.exports = flatten;