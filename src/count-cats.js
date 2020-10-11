const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let number = 0;
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
     number += countCats(array[i]);
    }
    if (array[i] === '^^') {
      number += 1
    } 
  } 
  return number;
}
