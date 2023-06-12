const capitalize = require('./capitalize');

describe('capitalize function', () => {
    test('should return capitalized text', () => {
      expect(capitalize('hello')).toMatch(/Hello/);
    });
  });
  
