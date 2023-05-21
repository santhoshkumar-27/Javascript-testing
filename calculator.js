class ArithmaticError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ArithmaticError';
    }
}
class Calculator {
    total = 0;
    constructor() {
    }
    get version() {
        return '0.1'
    }
    add(num1, num2) {
        return num1 + num2;
    }
    subtract(num1, num2) {
        return num1 - num2;
    }
    divide(num1, num2) {
        if (num2 === 0) {
            // throw new Error('value is not equal to zero');
            throw new ArithmaticError('value is not equal to zero');
        }
        return num1 / num2;
    }
    multiple(num1, num2) {
        return num1 * num2;
    }
}

// function Calculator() {
//     this.total = 0;
// }

// Calculator.prototype.add =  (num1, num2) => {
//     return  num1 + num2;
// }
// Calculator.prototype.subtract =  (num1, num2) => {
//     return  num1 - num2;
// }
// Calculator.prototype.divide =  (num1, num2) => {
//     if (num2 === 0) {
//         throw new ArithmaticError('value is not equal to zero');
//     }
//     return  num1 / num2;
// }
// Calculator.prototype.multiple =  (num1, num2) => {
//     return  num1 * num2;
// }


// Object.defineProperty(Calculator, 'version', {
//     get: function () {
//         return '0.1';
//     },
//     configurable: true,
//     enumerable: true,
// })