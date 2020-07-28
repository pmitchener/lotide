const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }
    results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i];
  }  
  return results;
};
module.exports = letterPositions;