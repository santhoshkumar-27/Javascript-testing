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
        let ele;
        beforeAll(() => {
            ele = document.createElement('span')
            ele.setAttribute('id', 'result_number');
            document.body.appendChild(ele);
        })
        afterAll(() => {
            document.body.removeChild(ele)
        })
        it('should call the add function', () => {
            const spyAdd = spyOn(Calculator.prototype, 'add')
            calculateNumber(1, 2, '+');
            expect(spyAdd).toHaveBeenCalled();
            expect(spyAdd).toHaveBeenCalledWith(1, 2);
            expect(spyAdd).toHaveBeenCalledTimes(1);

        })
        it('should call the subtract function', () => {
            const spySubtract = spyOn(Calculator.prototype, 'subtract')
            calculateNumber(2, 1, '-');
            expect(spySubtract).toHaveBeenCalled();
            expect(spySubtract).toHaveBeenCalledWith(2, 1);
            expect(spySubtract).toHaveBeenCalledTimes(1);
        })
        it('should call the multiply function', () => {
            const spyMultiple = spyOn(Calculator.prototype, 'multiple')
            calculateNumber(2, 1, '*');
            expect(spyMultiple).toHaveBeenCalled();
            expect(spyMultiple).toHaveBeenCalledWith(2, 1);
            expect(spyMultiple).toHaveBeenCalledTimes(1);
        })
        it('should call the divide function', () => {
            const spyDivide = spyOn(Calculator.prototype, 'divide')
            calculateNumber(2, 1, '/');
            expect(spyDivide).toHaveBeenCalled();
            expect(spyDivide).toHaveBeenCalledWith(2, 1);
            expect(spyDivide).toHaveBeenCalledTimes(1);
        })
        it('calls the updatedResultOnView executes the real implementation using callThrough', () => {
            const spyUpdatedResultOnView = spyOn(window, 'updateResultOnView')
            const spyAdd = spyOn(Calculator.prototype, 'add').and.callThrough()
            // callThrough method call the real method and spy on that

            calculateNumber(1, 2, '+');
            expect(spyUpdatedResultOnView).toHaveBeenCalled();
            expect(spyAdd).toHaveBeenCalled();
            expect(spyUpdatedResultOnView).toHaveBeenCalledWith(3);
            expect(spyAdd).toHaveBeenCalledTimes(1);
            expect(spyUpdatedResultOnView).toHaveBeenCalledTimes(1);


        })

        it('calls the updatedResultOnView executes the real implementation using callFake', () => {
            const spyUpdatedResultOnView = spyOn(window, 'updateResultOnView')
            const spyAdd = spyOn(Calculator.prototype, 'add').and.callFake(() => {
                return 3
            })
            // callFake we can implementation of customlogic for same functionli

            calculateNumber(1, 2, '+');
            expect(spyUpdatedResultOnView).toHaveBeenCalled();
            expect(spyAdd).toHaveBeenCalled();
            expect(spyUpdatedResultOnView).toHaveBeenCalledWith(3);
            expect(spyAdd).toHaveBeenCalledTimes(1);
            expect(spyUpdatedResultOnView).toHaveBeenCalledTimes(1);

        })

        it('calls the updatedResultOnView executes the real implementation using returnValue', () => {
            const spyUpdatedResultOnView = spyOn(window, 'updateResultOnView')
            const spyAdd = spyOn(Calculator.prototype, 'add').and.returnValue(3)
            // returnValue only return the value ans static of for that method and it return single value

            calculateNumber(1, 2, '+');
            expect(spyUpdatedResultOnView).toHaveBeenCalled();
            expect(spyAdd).toHaveBeenCalled();
            expect(spyUpdatedResultOnView).toHaveBeenCalledWith(3);
            expect(spyAdd).toHaveBeenCalledTimes(1);
            expect(spyUpdatedResultOnView).toHaveBeenCalledTimes(1);

        })
        it('calls the updatedResultOnView executes the real implementation using returnValues', () => {
            const spyUpdatedResultOnView = spyOn(window, 'updateResultOnView')
            const spyAdd = spyOn(Calculator.prototype, 'add').and.returnValues(3, null)
            // returnValue only return the value ans static of for that method and it return single value

            calculateNumber(1, 2, '+');
            expect(spyUpdatedResultOnView).toHaveBeenCalled();
            expect(spyAdd).toHaveBeenCalled();
            expect(spyUpdatedResultOnView).toHaveBeenCalledWith(3);
            expect(spyAdd).toHaveBeenCalledTimes(1);
            expect(spyUpdatedResultOnView).toHaveBeenCalledTimes(1);

        })
        it('doesn\'t handle errors', () => {
            const spyAdd = spyOn(Calculator.prototype, 'add').and.throwError('unable to add these numbers');
            expect(function () {
                return calculateNumber(1, 2, '+');
            }).toThrowError('unable to add these numbers')
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

    describe('showCalculatorVersion()', () => {
        let ele;
        beforeAll(() => {
            ele = document.createElement('span')
            ele.setAttribute('id', 'version_number');
            document.body.appendChild(ele);
        })
        afterAll(() => {
            document.body.removeChild(ele)
        })
        xit('should verison of the calculator in the view', (done) => { //its not working 
            const element = spyOn(document, 'getElementById').and.returnValue({
                innerHTML: null
            });
            const spy = spyOnProperty(Calculator.prototype, 'version', 'get').and.returnValue(Promise.resolve('0.4'));
            showCalculatorVersion()
            expect(spy).toBeTruthy()
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledTimes(1);
            // expect(spy).toHaveBeenCalledWith('0.1');
            // expect(spy()).toEqual('0.1')
            spy().then( (version) => {
                // expect(version).toBe('0.4')
                expect(element().innerHTML).toBe(version);
                done();
            })
        })
    })
})

// spies is to isolate the dependancy function or another module used in that particular function