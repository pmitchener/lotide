const assertEqual = require("./assertEqual");

const head = function(test){
  if(!test)
  {
    return
  }
  return test[0];
};
module.exports = head;