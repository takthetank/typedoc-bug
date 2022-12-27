// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const { join } = require('path');
const { constants } = require('karma');

module.exports = () => {
   return {
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
         require('karma-jasmine'),
         require('karma-jasmine-html-reporter'),
         require('karma-chrome-launcher'),
         require('karma-coverage'),
         require('@angular-devkit/build-angular/plugins/karma'),
         require('karma-junit-reporter')
       ],
      client: {
         jasmine: {
            // you can add configuration options for Jasmine here
            // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
            // for example, you can disable the random execution with `random: false`
            // or set a specific seed with `seed: 4321`
         },
         clearContext: false, // leave Jasmine Spec Runner output visible in browser
      },
      jasmineHtmlReporter: {
         suppressAll: true, // removes the duplicated traces
      },
      coverageReporter: {
         dir: join(__dirname, './coverage'),
         subdir: '.',
         includeAllSources: true,
         reporters: [{ type: 'lcov' }, { type: 'cobertura', file: 'coverage.cobertura.xml' }, { type: 'text-summary' }],
         watermarks: { statements: [60, 80], functions: [40, 60], branches: [40, 60], lines: [60, 80] },
         check: { emitWarning: true, global: { statements: 80, lines: 80 } },
      },
      junitReporter: {
         outputDir: join(__dirname, './test-results'),
         outputFile: 'unit-test-result.xml'
       },
      reporters: ['progress', 'coverage', 'junit'],
      // Default settings (optional)
      port: 9876,
      colors: true,
      logLevel: constants.LOG_INFO,
      autoWatch: true,
      browsers: ['ChromeHeadlessCI'],
      singleRun: false,
      restartOnFileChange: true,
      captureTimeout: 60000,
      browserDisconnectTimeout: 60000,
      browserDisconnectTolerance: 3,
      browserNoActivityTimeout: 100000,
      customLaunchers: {
         ChromeHeadlessCI: {
            base: 'ChromeHeadless',
            flags: ['--disable-web-security', '--disable-gpu', '--disable-accelerated-video-decode', '--disable-accelerated-mjpeg-decode', '--no-sandbox'],
         },
      },
   };
};
