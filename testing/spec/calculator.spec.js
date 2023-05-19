describe('calculator testing suites', () => { // this is test suite is group of test
    let calculator;
    let calculator1;
    let result;
    beforeEach(() => {
        // executes before execution of each spec in the suite
        calculator = new Calculator();
        calculator1 = new Calculator();
    })
    afterEach(() => {
        // executes before execution of each spec in the suite
        // clean up after the spec execution
        result = undefined;
    })
    describe('calculator', () => {

        describe('add()', () => {
            it('should sum the two number taking from paramaters', () => {
                result = calculator.add(5, 5)
                expect(result).toBe(10);
            })
        })

        describe('subtract()', () => {
            it('should subtract the two number taking from paramaters', () => {
                 result = calculator.subtract(5, 5)
                expect(result).toBe(0);
            })
        })
        describe('multiple()', () => {
            it('should multiply the two number taking from paramaters', () => {
                 result = calculator.divide(5, 5)
                expect(result).toBe(1);
            })
        })
        describe('divide()', () => {
            it('should divide the two number taking from paramaters', () => {
                 result = calculator.multiple(5, 5)
                expect(result).toBe(25);
            })
        })

        it('should compare the objects', () => {
            // expect(calculator2).toBe(calculator1);
            expect(calculator1).toEqual(calculator); // toEqual also check the expect and actual behaivor of
            /*
                compare key -> name and a type
                compare value -> of same value and a type
            */
        });
        it('should be the truthy', () => {
            expect(calculator).toBeTruthy();
        })
        it('should be the falsy', () => {
            expect(calculator.add(0, 0)).toBeFalsy();
        })
        xit('should be in disabled stated', () => {
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

/*
    jasmine has a life cycle hooks of the setup and teardown

    setup - 
        beforeEach, - this will be executued before the each spec run
        beforeAll, - this will be executed only one time before the all specs in the suite
    
    teardown
        afterEach -  this will be executued after the each spec run
        afterAll - this will be executed only one time after the all specs in the suite
*/