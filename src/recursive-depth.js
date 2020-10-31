const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depthArrFlat = 1;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let anotherDepth = this.calculateDepth(arr[i]) + 1;

        if (anotherDepth > depthArrFlat) {
          depthArrFlat = anotherDepth;
        };
      };
    };
    return depthArrFlat;
  };
};
