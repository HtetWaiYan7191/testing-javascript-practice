const Calculator = require('./simpleCalculator');

describe('Calculator', () => {
    describe('sum function', () => {
      test('should return the sum of two numbers', () => {
        expect(Calculator.sum(1, 2)).toBe(3);
      });

      test('should return the defined number', () => {
        expect(Calculator.sum(1, 2)).toBeDefined();
      })

      test('should return error message', () => {
            expect(() => Calculator.sum(undefined, undefined)).toThrow('The arguments must be numbers');
            expect(() => Calculator.sum(null, null)).toThrow('The arguments must be numbers');
      })
    });
})

describe('Calculator', () => {
    describe('substract function', () => {
        test('should return the substract result', () => {
            expect(Calculator.substract(5,4)).toBe(1);
        })

        test('should return the defined value', () => {
            expect(Calculator.substract(5,4)).toBeDefined;
        })

        test('should return an error message if the arguments are negative', () => {
            expect(() => Calculator.substract(-1, -2)).toThrow('The arguments must be positive');
        })
    })
})

describe('Calculator', () => {
    describe('multiply function', () => {
        test('should return the multiply value', () => {
            expect(Calculator.multiply(1, 2)).toBe(2);
        })

        test('should return negative numbers', () => {
            expect(Calculator.multiply(-1,2)).toBeLessThan(0);
        })

        test('the arguments should be numbers', () => {
            expect(() => Calculator.multiply('hello', 'multiply')).toThrow('The arguments must be numbers');
          });
          
    })
})

describe('Calculator', () => {
    describe('divide function', () => {
        test('should return the division of two numbers', () => {
            expect(Calculator.divide(6, 2)).toBe(3);
            expect(Calculator.divide(10, 5)).toBe(2);
          });
          
          test('should return an error message if dividing by zero', () => {
            expect(() => Calculator.divide(8, 0)).toThrow('Division by zero is not allowed');
          });
          
          test('the arguments should be numbers', () => {
            expect(() => Calculator.divide('hello', 'divide')).toThrow('The arguments must be numbers');
          });
          
    })
})
    
