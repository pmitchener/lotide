const middle = (list) => {
  /*
  let newArray = [];
  let halfPoint = list.length / 2
  let mid = Math.ceil(halfPoint)
  If list.length is odd
    newArray.push(list[mid -1])
  Else
    newArray.push(list[mid-1])
    newArray.push(list[list.length - mid])
  End if
  Return newArray
  */
  if (list.length < 3) {
    return [];
  }
  let newArray = [];
  let mid = Math.ceil(list.length / 2);

  newArray.push(list[mid - 1]);
  if (list.length % 2 === 0) {//odd
    newArray.push(list[list.length - mid]);
  }
  return newArray;
};
module.exports = middle;