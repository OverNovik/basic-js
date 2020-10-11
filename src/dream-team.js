const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameTeam = [];
  
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] != String) {
      return false;
    } else if (members[i].substr(0) != members[i].substr(0).toUpperCase()){
      return false;
    } else {
    members[i].substr(0).unshift(nameTeam);
  } 
  return nameTeam.map();
}
}
