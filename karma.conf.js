// karma.conf.js
module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'customMatcher.js', '*.js', '*.spec.js'
        ],
        plugins: ['karma-jasmine'],
        reporters: ['dots'],
        colors: true,
        singleRun: true,
        //...
    });
};