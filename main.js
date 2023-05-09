const calculator = new Calculator();
const operators = /\*|\+|\/|\-/;
let result_number_ele;
window.addEventListener('load', ($event) => {
    document.getElementById('valueEnter').addEventListener('change', getInputFromUser)
    result_number_ele = document.getElementById('result_number');
})
function getInputFromUser(event) {
    const inputValue = event.target.value;
    if (!operators.test(inputValue)) {
        result_number_ele.innerHTML = 'Invalid operator you entered';
        return;
    }
    const numbers = inputValue.split(operators);
    const num1 = +numbers[0];
    const num2 = +numbers[1];
    const operator = inputValue.match(operators)[0].trim();
    calculate(num1, num2, operator);
    event.target.value = null;
}

function calculate(num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = calculator.add(num1, num2);
            break;
        case '-':
            result = calculator.subtract(num1, num2);
            break;
        case '*':
            result = calculator.multiple(num1, num2);
            break;
        case '/':
            result = calculator.multiple(num1, num2);
            break;
        default:
            result = 'Invalid operator';
    }
    result_number_ele.innerHTML = result;
}
