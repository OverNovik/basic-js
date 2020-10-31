const CustomError = require("../extensions/custom-error");

const chainMaker = {
  newChainArr: [],
  getLength() {
    return this.newChainArr.length;
  },
  addLink(value) {
    this.newChainArr.push(value);
    return this;
  },
  removeLink(position) {
    if (this.newChainArr.length < position || position < 1) {
      this.newChainArr = [];
      throw new Error();
    }
    this.newChainArr.splice(position -1, 1);
    return this;
  },
  reverseChain() {
    this.newChainArr.reverse();
    return this;
  },
  finishChain() {
    const finish = this.newChainArr.map(value => 
      value === null ? '( null )' : `( ${value} )`).join("~~");
    this.newChainArr = [];
    return finish;
  }
};

module.exports = chainMaker;
