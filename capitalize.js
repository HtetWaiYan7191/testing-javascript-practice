const captialize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
captialize('hello');
module.exports = captialize;