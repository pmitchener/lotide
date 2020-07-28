const countLetters = (sentence) => {
  let obj = {};
  if (!sentence || sentence.trim().length === 0) {
    return obj;
  }
  for (const char of sentence) {
    if (char === " ") {
      continue;
    }
    obj[char] ? obj[char]++ : obj[char] = 1;
  }
  return obj;
};
module.exports = countLetters;