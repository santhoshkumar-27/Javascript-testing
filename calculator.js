class ArithmaticError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ArithmaticError';
    }
}
class Calculator {
    constructor() {
        this.total = 0;
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
