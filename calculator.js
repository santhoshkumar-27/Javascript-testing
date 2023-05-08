function Calculator() {
    this.total = 0;
}

Calculator.prototype.add = function (num1, num2) {
    return  num1 + num2;
}
Calculator.prototype.subtract = function (num1, num2) {
    return  num1 - num2;
}
Calculator.prototype.divide = function (num1, num2) {
    if (num2 === 0) {
        throw new Error('value is not equal to zero')
    }
    return  num1 / num2;
}
Calculator.prototype.multiple = function (num1, num2) {
    return  num1 * num2;
}
