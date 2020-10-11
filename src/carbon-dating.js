const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let a = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
      b = 0.693 / HALF_LIFE_PERIOD;
      c = Math.ceil(a / b);
  if (typeof sampleActivity == String && parseFloat(sampleActivity) < 15 && parseFloat(sampleActivity) > 0) {
    return c;
  } else {
    return false;
  }
};
