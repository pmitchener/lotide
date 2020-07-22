const getArgV = () => {
  if (!process.argv.length === 2) {
    return null;
  }
  return process.argv.slice(2);
};
const pigLatin = function(words) {
  let resultStr = "";
  for (let word of words) {
    let endStr = word[0] + "ay";
    if (resultStr.length > 0) {
      resultStr += " ";
    }
    for (let i = 0; i < word.length; i++) {
      if (i === 0) {
        continue;
      }
      resultStr += word[i];
    }
    resultStr += endStr;
  }
  console.log(resultStr);
};
pigLatin(getArgV());