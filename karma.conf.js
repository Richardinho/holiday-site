// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-06-06 using
// generator-karma 0.9.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // base path, that will be used to resolve files and exclude
    basePath: '.',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [

        "app/components/angular/angular.js",
        "app/components/angular-animate/angular-animate.js",
        "app/components/angular-aria/angular-aria.js",
        "app/components/angular-cookies/angular-cookies.js",
        "app/components/angular-messages/angular-messages.js",
        "app/components/angular-resource/angular-resource.js",
        "app/components/angular-route/angular-route.js",
        "app/components/angular-sanitize/angular-sanitize.js",
        "app/components/angular-touch/angular-touch.js",
        "app/components/lodash/lodash.js",
        "app/components/angular-google-maps/dist/angular-google-maps.js",

        //  mocks

        "app/components/angular-mocks/angular-mocks.js",

        // endbower
        'public/js/**/*.js',
        'test/spec/**/*.spec.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun:  true,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
