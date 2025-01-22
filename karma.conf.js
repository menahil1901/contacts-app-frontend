module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('@angular-devkit/build-angular/plugins/karma'),
        require('karma-coverage')  // Add karma-coverage plugin
      ],
      client: {
        clearContext: false // Leave Jasmine Spec Runner output visible in browser
      },
      jasmineHtmlReporter: {
        suppressAll: true // Removes the duplicated traces
      },
      reporters: ['progress', 'kjhtml', 'coverage'],  // Add coverage to reporters
      coverageReporter: {
        type: 'lcov',  // Generates an lcov report
        dir: 'coverage/',  // Directory for coverage reports
      },
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      restartOnFileChange: true
    });
  };
  