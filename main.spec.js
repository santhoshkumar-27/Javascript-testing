describe('main.js', () => {
    describe('getInputFromUser()', () => {
        it('should validate the operator, if failed call error dependency', () => {
            spyOn(window, 'updateResultOnView');
            /*
                here stub means just to pretend the function has to called.
                parameter 1 is the method or function which present on object.
                parameter 2 is the method or function name to spy on
            */
            getInputFromUser({ target: { value: 'asdf' } });
            expect(window.updateResultOnView).toHaveBeenCalled();
            expect(window.updateResultOnView).toHaveBeenCalledWith('Invalid operator you entered');
            expect(window.updateResultOnView).toHaveBeenCalledTimes(1);
        });

        it('should validate the num1, if failed call error dependency', () => {
            spyOn(window, 'updateResultOnView');
            getInputFromUser({ target: { value: 'asdf+5' } });
            expect(window.updateResultOnView).toHaveBeenCalled();
            expect(window.updateResultOnView).toHaveBeenCalledWith('number must be entered');
            expect(window.updateResultOnView).toHaveBeenCalledTimes(1);
        });
        it('should validate the num2, if failed call error dependency', () => {
            spyOn(window, 'updateResultOnView');
            getInputFromUser({ target: { value: '6+asdf' } });
            expect(window.updateResultOnView).toHaveBeenCalled();
            expect(window.updateResultOnView).toHaveBeenCalledWith('number must be entered');
            expect(window.updateResultOnView).toHaveBeenCalledTimes(1);
        });

        it('should call the calculator with num1, num2, operator', () => {
            spyOn(window, 'updateResultOnView');
            getInputFromUser({ target: { value: '6+5' } });
            // expect(window.updateResultOnView).toHaveBeenCalled();
            expect(window.updateResultOnView).not.toHaveBeenCalledWith('number must be entered');
            expect(window.updateResultOnView).not.toHaveBeenCalledWith('Invalid operator you entered');
            expect(window.updateResultOnView).toHaveBeenCalledTimes(1);
        });
    })
    describe('calculateNumber(num1, num2, operator)', () => {

        it('should call the add function', () => {

            var originalConstructor = Calculator,
                spiedObj;
            spyOn(window, 'Calculator').and.callFake(function () {
                spiedObj = new originalConstructor();
                spyOn(spiedObj, 'add');
                return spiedObj;
            });
            // spyOn(window.Calculator, 'add');
            spyOn(window, 'updateResultOnView');
            // getInputFromUser({ target: { value: '6+5' } });
            calculateNumber(1, 2, '+')
            expect(spiedObj.add).toHaveBeenCalled();
            expect(spiedObj.add).toHaveBeenCalledWith(6, 5);
            expect(spiedObj.add).toHaveBeenCalledTimes(1);

            // 
            expect(window.updateResultOnView).toHaveBeenCalled();
            expect(window.updateResultOnView).toHaveBeenCalledWith(11);
            expect(window.updateResultOnView).toHaveBeenCalledTimes(1);

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
        beforeAll(() => {
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