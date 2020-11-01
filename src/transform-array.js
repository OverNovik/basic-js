const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transArr = [];

  if (arr === undefined) throw new Error;
  

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-next' && arr[i] !== '--discard-prev') transArr.push(arr[i]);
    else if (arr[i] === '--double-next' && arr[i + 1] !== undefined) transArr.push(arr[i + 1]);
    else if (arr[i] === '--discard-next' && arr[i + 1] !== undefined) i++;
    else if (arr[i] === '--double-prev' && arr[i - 2] !== "--discard-next" && arr[i - 1] !== undefined) transArr.push(arr[i - 1]);
    else if (arr[i] === '--discard-prev' && arr[i - 2] !== "--discard-next" && arr[i - 1] !== undefined) transArr.pop(arr[i - 1]);
  }
  return transArr;
};
