/*const getArgV = () => {
  if (!process.argv.length === 2) {
    return null;
  }
  return process.argv.slice(2);
};
*/
const reverse = function(words) {
  if (words === null) {
    return;
  }
  for (let word of words) {
    let reverseStr = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reverseStr += word[i];
    }
    console.log(reverseStr);
  }
};
module.exports = reverse;
//reverse(getArgV());