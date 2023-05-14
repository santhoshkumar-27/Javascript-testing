describe('calculator testing suites', () => { // this is test suite is group of test
    it('should sum the two number taking from paramaters', () => {
        const calculator = new Calculator();
        const result = calculator.add(5, 5)
        expect(result).toBe(10);
    })

    it('should subtract the two number taking from paramaters', () => {
        const calculator = new Calculator();
        const result = calculator.subtract(5, 5)
        expect(result).toBe(0);
    })

    it('should divide the two number taking from paramaters', () => {
        const calculator = new Calculator();
        const result = calculator.multiple(5, 5)
        expect(result).toBe(25);
    })

    it('should multiply the two number taking from paramaters', () => {
        const calculator = new Calculator();
        const result = calculator.divide(5, 5)
        expect(result).toBe(1);
    })

    xit('should be in disabled stated', () => {
        const calculator = new Calculator();
        const result = calculator.divide(5, 5)
        expect(result).toBe(1);
    })
});

// we can add more test suites like this
/*
describe('calculator testing suites', () => {
    it('checking the sum isolated function taking two paramaters', () => {

    })
});
*/

// if you want to disable the test just prefix ('x') in (it function); or disable the complete test suite
/*
xdescribe('calculator testing suites', () => {
    xit('checking the sum isolated function taking two paramaters', () => {

    })
});
*/
xdescribe('disabled test suite', () => {
    xit('disabled state for the test or spec', () => {
        const result = 10;
        expect(result).toBe(10);
        /*
            result is a actual value compare with
            10 -> is the expected value
        */ 
    })
});