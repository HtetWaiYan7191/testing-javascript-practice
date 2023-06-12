const stringLength = (str) => {
    if (str.length === 0) {
        throw new Error('The String has no characters');
      }
    
      if (str.length > 10) {
        throw new Error('The string is more than 10 characters');
      }
      if(str.length != 0 && str.length < 10) {
        const count  = str.split('').length;
        return count;
      }
      
   
};

stringLength('hello');
module.exports = stringLength;