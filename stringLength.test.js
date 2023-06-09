const stringLength = require('./stringLength');

describe('stringLength', () => {
  it('should pass if the string is at least 1 character long and not longer than 10 characters', () => {
    expect(stringLength('a')).toBeGreaterThan(0);
    expect(stringLength('abcdefghi')).toBeLessThanOrEqual(10);
    expect(stringLength('012345678')).toBeLessThanOrEqual(10);
  });

  it('should throw an error if the string is not one character or more than 10 characters', () => {
    expect(() => stringLength('')).toThrow('The String has no characters');
    expect(() => stringLength('abcdefghijs')).toThrow('The string is more than 10 characters');
  });
});
