const reverseString = require('./reverseString');

describe('reverseString', () => {
    it('should pass if the string is reversed', () => {
        expect(reverseString('hello')).toMatch(/olleh/);
    })

    it('should throw error if the string is undefined,null, or empty', () => {
    expect(() => reverseString('')).toThrow('The string is empty');
    expect(() => reverseString(undefined)).toThrow('The argument is undefined');
    })
})