const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameTeam = [];
  if (!Array.isArray(members)) {
    return false;
  }
  members.forEach(items => {
    if (typeof(items) === "string") {
      nameTeam.push(items.replace(/\s/g, "")[0].toUpperCase());
    } else {
      null;
    }
  })
  return nameTeam.sort().join('');
}

