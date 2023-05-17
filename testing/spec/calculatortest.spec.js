describe('calculatortest file', () => {
    it('should be unique object', () => {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();
        // expect(calculator2).toBe(calculator1);
        expect(calculator2).not.toBe(calculator1);
    })
})