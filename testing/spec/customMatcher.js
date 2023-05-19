const customMatcher = {
    toBeCalculator: function() {
        return {
            compare: function(actual, expected) {
                const result = {
                    pass : false,
                    message : ''
                } 
                if (actual instanceof Calculator) {
                    result.pass = true;
                } else {
                    result.message = `expected ${actual} to a instance of ${expected}`
                }
                return result;
            }
        }
    }
}