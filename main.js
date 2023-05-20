const calculator = new Calculator();
const operators = /\*|\+|\/|\-/;
let result_number_ele;
window.addEventListener('load', ($event) => {
    document.getElementById('valueEnter') && document.getElementById('valueEnter').addEventListener('change', getInputFromUser)
})
function getInputFromUser(event) {
    const inputValue = event.target.value;
    if (!operators.test(inputValue)) {
        updateResultOnView('Invalid operator you entered');
        event.target.value = null;
        return;
    }
    const numbers = inputValue.split(operators);
    const num1 = +numbers[0];
    const num2 = +numbers[1];
    if (isNaN(num1) || isNaN(num2)) {
        updateResultOnView('number must be entered');
        event.target.value = null;
        return;
    }
    const operator = inputValue.match(operators)[0].trim();
    calculateNumber(num1, num2, operator);
    event.target.value = null;
}

function calculateNumber(num1, num2, operator) {
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
    updateResultOnView(result);
}

function updateResultOnView(message) {
    result_number_ele = document.getElementById('result_number');
    result_number_ele.innerHTML = message;  
}