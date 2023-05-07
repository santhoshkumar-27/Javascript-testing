window.addEventListener('load', ($event) => {
    document.getElementById('valueEnter').addEventListener('change', calculate)
})

function calculate(event) {
    const inputValue = event.target.value;
    // const num1;
    // const num2:
    // const operator
    console.log('inputValue', inputValue)
}