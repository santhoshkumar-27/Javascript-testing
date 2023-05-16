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

    it('should compare the objects', () => {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();
        // expect(calculator2).toBe(calculator1);
        expect(calculator2).toEqual(calculator1); // toEqual also check the expect and actual behaivor of
        /*
            compare key -> name and a type
            compare value -> of same value and a type
        */
    });
    xit('should be in disabled stated', () => {
        const calculator = new Calculator();
        const result = calculator.divide(5, 5)
        expect(result).toBe(1);
    })

    xit('should compare non primitive type', () => {
        let person1 = {
            name: 'santhosh'
        }
        let person2 = {
            name: 'santhosh'
        }
        // expect(person1).toBe(person2); // not same
        expect(person1).toBe(person1); // now the tripple equal to check the memory address of the objects its same
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

/*
    if you have compare === of primitive types it should compare only values and type
    but if you are compare with the non-primitive types of like object arrays
    let person1 = {
        name: 'santhosh'
    }
    let person2 = {
        name: 'santhosh'
    }

    here the two object have same value but different memory address
    so tha person1 === person2 if would fails

    person1 === person2 is would pass
*/