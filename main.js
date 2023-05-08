// import { Calculator } from "./calculator";

window.addEventListener('load', ($event) => {
    document.getElementById('valueEnter').addEventListener('change', calculate)
})
const calculator = new Calculator()
function calculate(event) {
    const inputValue = event.target.value;
    const operators = /\*|\+|\/|\-/;
    const numbers = inputValue.split(operators);
    const num1 = +numbers[0];
    const num2 = +numbers[1];
    const operator = inputValue.match(operators)[0];
    console.log('inputValue', num1, num2, operator)
    console.log(calculate(num1, num2));
}