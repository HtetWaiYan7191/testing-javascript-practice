class Calculator {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static sum(x, y) {
        if (x === undefined || y === undefined) {
          throw new Error('The arguments must be numbers');
        } else if(x === null || y === null) {
            throw new Error('The arguments must be numbers');
        }
        return x + y;
      }
      

    static substract(x,y) {
        if(x < 0 || y < 0){
            throw new Error('The arguments must be positive');
        }
        return Math.abs(x-y);
    }

    static multiply(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
          throw new Error('The arguments must be numbers');
        }
        return x * y;
      }
      

    static divide(x,y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw new Error('The arguments must be numbers');
          } else if(y === 0) {
            throw new Error('Division by zero is not allowed');
          }
          return x/y;
    }
}

const calculator = new Calculator(1,2);

module.exports = Calculator;