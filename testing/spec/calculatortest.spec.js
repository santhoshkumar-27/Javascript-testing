describe('calculatortest file', () => {
    // negatation operators
    it('should be unique object', () => {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();
        // expect(calculator2).toBe(calculator1);
        expect(calculator2).not.toBe(calculator1);
    })
    // tobeundefined and tobedefined
    it('should implement all the method', () => {
        const calculator = new Calculator();
        expect(calculator.add).not.toBeUndefined();
        expect(calculator.subtract).not.toBeUndefined();
        expect(calculator.divide).toBeDefined();
        expect(calculator.multiple).not.toBeUndefined();
    })
    // tobeNull
    it('should be equal to null', () => {
        const area = null;
        // null is absence of value not to be undefined or any primitive data types
        expect(area).toBeNull(area);
    })
    it('should  contain constructor name same', () => {
        const calculator = new Calculator();
        expect(calculator.constructor.name).toContain('Calculator');
    })
    it('should handled the tobeNan matcher', () => {
        const calculator = new Calculator();
        expect(calculator.subtract(10, 'a')).toBeNaN();
        expect(calculator.multiple(10, 'a')).toBeNaN();
        expect(calculator.divide(10, 'a')).toBeNaN();
    });
    it('should throw the error for divide', () => {
        const calculator = new Calculator();
        expect(function () { calculator.divide(10, 0) }).toThrow();
        expect(function () { calculator.divide(10, 0) }).toThrow(new Error('value is not equal to zero'));
    });
    it('should throw the custom error for details', () => {
        const calculator = new Calculator();
        expect(function () { calculator.divide(10, 0) }).toThrowError();
        expect(function () { calculator.divide(10, 0) }).toThrowError('value is not equal to zero');
        // expect(function (){calculator.divide(10, 0)}).toThrowError(Error, 'value is not equal to zero');
        expect(function () { calculator.divide(10, 0) }).toThrowError(ArithmaticError, 'value is not equal to zero');

    })
    it('should be able to return the number', () => {
        const calculator = new Calculator();
        expect(calculator.add(10, 0)).toBe(10);
        expect(calculator.add(10, 0)).toMatch(/[-+]?\d+/);
        expect(typeof calculator.add(10, 0)).toMatch('number');
    })
})