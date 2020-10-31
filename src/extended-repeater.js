const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result;

    if (options.addition !== undefined) {
        let additionFrame = options.addition;

        for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
            additionFrame += `${options.additionSeparator}${options.addition}`;
        }

        result = `${str}${additionFrame}`;

        for (let i = 0; i < options.repeatTimes - 1; i++) {
            result += `${options.separator}${str}${additionFrame}`;
        }
    } else {
      result = `${str}`;
      const separator = options.separator || '+';
        for (let i = 0; i < options.repeatTimes - 1; i++) {
            result += `${separator}${str}`;
        }
    }

    return result;
};
  