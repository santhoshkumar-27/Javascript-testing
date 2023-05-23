// karma.conf.js
module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'customMatcher.js', '*.js', '*.spec.js'
        ],
        plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-coverage'],
        reporters: ['dots', 'coverage'],
        colors: true,
        singleRun: true,
        // browsers: ['Chrome'],
        browsers: ['ChromeHeadless'],
        preprocessors: {
            '*.js': 'coverage'
        },
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
        //...
    });
};