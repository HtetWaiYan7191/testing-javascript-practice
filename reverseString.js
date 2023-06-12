const reverseString = (str) => {
    if (str === undefined) {
      throw new Error('The argument is undefined');
    } else if (str.length === 0) {
      throw new Error('The string is empty');
    } else {
      const reversedStr = str.split('').reverse().join('');
      return reversedStr;
    }
  };

reverseString('hello')
module.exports = reverseString;