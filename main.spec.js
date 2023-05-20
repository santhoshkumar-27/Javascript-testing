describe('main.js', () => {
    describe('getInputFromUser()', () => {
        xit('get input from the element', () => {

        })

        it('should validate the operator, if failed call error dependency', () => {
            spyOn(window, 'updateResultOnView').and.stub();
            /*
                here stub means just to pretend the function has to called.
                parameter 1 is the method or function which present on object.
                parameter 2 is the method or function name to spy on
            */
            getInputFromUser({target: {value: 'asdf'}});
            expect(window.updateResultOnView).toHaveBeenCalled();
        })

        it('should validate the num1, if failed call error dependency', () => {
            spyOn(window, 'updateResultOnView').and.stub();
            getInputFromUser({target: {value: 'asdf+5'}});
            expect(window.updateResultOnView).toHaveBeenCalled();
        })
        it('should validate the num2, if failed call error dependency', () => {
            spyOn(window, 'updateResultOnView').and.stub();
            getInputFromUser({target: {value: '6+asdf'}});
            expect(window.updateResultOnView).toHaveBeenCalled();
        })

        it('should validate the num1 and num2, if passed no need to call error dependency', () => {
            spyOn(window, 'updateResultOnView').and.stub();
            getInputFromUser({target: {value: '6+5'}});
            expect(window.updateResultOnView).toHaveBeenCalledTimes(0);
        })
        
        xit('should be split the expression to get number and operator', () =>{

        })

        xit('should get the number1', () => {

        })

        xit('should get the number2', () => {

        })
        
        xit('should get the operator', () => {

        })

        xit('should call the calculator with num1, num2, operator', () => {

        })
    })
    describe('calculateNumber(num1, num2, operator)', () => {
 
        it('should call the add function', () => {
 
        })
        it('should call the subtract function', () => {
        })
        it('should call the multiply function', () => {
        })
        it('should call the divide function', () => {

        })

    })

    describe('updateResultOnView(message: string)', () => {
        let ele;
        beforeAll(()=> {
            ele = document.createElement('span')
            ele.setAttribute('id', 'result_number');
            document.body.appendChild(ele);
        })
        afterAll(() => {
            document.body.removeChild(ele)
        })
        it('should check the add value patch in views', () => {
            calculateNumber(1, 2, '+');
            expect(ele.innerHTML).toBe('3')
        })
        it('should check the subtract value patch in views', () => {
            calculateNumber(5, 2, '-');
            expect(ele.innerHTML).toBe('3')
        })
        it('should check the multiple value patch in views', () => {
            calculateNumber(1, 2, '*');
            expect(ele.innerHTML).toBe('2')
        })
        it('should check the divide value patch in views', () => {
            calculateNumber(2, 1, '/');
            expect(ele.innerHTML).toBe('2')
        })
        it('should check operator mismatch value patch in views', () => {
            calculateNumber(1, 2, '#');
            expect(ele.innerHTML).toBe('Invalid operator')
        })
    })
})

// spies is to isolate the dependancy function or another module used in that particular function