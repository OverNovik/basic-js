const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isForwardMode = true) {
    this.isForwardMode = isForwardMode;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
  }
  getString(inMessage, inKey, type) {
    const message = inMessage.toLowerCase();
    const key = inKey.toLowerCase();

    if (!message || !key) throw new CustomError();

    let result = '';
    let c;
  
    for (let i = 0, index = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) !== -1) {
        const mi = this.alphabet.indexOf(message[(i >= message.length) ? i % message.length : i]);
        const ki_s = key[(index >= key.length) ? (index % key.length) : index];
        const ki = this.alphabet.indexOf(ki_s);
        c = this.alphabet[(this.alphabet.length + (type === 'encrypt' ? mi + ki : mi - ki)) % this.alphabet.length];
        index++;
      } else {
        c = message[i];
      }
  
      result += c.toUpperCase();
    }
  
    if (!this.isForwardMode) {
      return result.split('').reverse().join('');
    }
    return result;
  }
  
  encrypt(inMessage, inKey) {
    return this.getString(inMessage, inKey, 'encrypt');
  } 

  decrypt(inMessage, inKey) {
    return this.getString(inMessage, inKey, 'decrypt');
  }
}
  module.exports = VigenereCipheringMachine;
