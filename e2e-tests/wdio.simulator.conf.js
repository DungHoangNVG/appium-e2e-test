exports.config = {
    // 4723 is the default port for Appium
    port: 4723,

    // How much detail should be logged. The options are:
    // 'silent', 'verbose', 'command', 'data', 'result', 'error'
    logLevel: 'error',


    //Use these capabilities to run the tests on a iPhone X simulator; be aware: the tests involving the camera won't work!
    capabilities: [{
        platformName: 'iOS',
        platformVersion: '12.1',
        deviceName: 'iPhone X',
        app: './platforms/ios/build/emulator/appium-test.app',
        autoWebview: true,
        autoGrantPermissions: true,
        automationName: 'XCUITest',
        simulator:true
    }],

    // Where the files we are testing can be found.
    specs: ['./e2e-tests/spec/**/*.js'],

    // Use the Appium plugin for Webdriver. Without this, we would need to run appium
    // separately on the command line.
    services: ['appium'],

    // The reporter is what formats your test results on the command line. 'spec' lists
    // the names of the tests with a tick or X next to them. See
    // https://www.npmjs.com/search?q=wdio-reporter for a full list of reporters.
    reporters: ['spec'],

    // wdio will run your tests using the framework below. You can choose from several,
    // much like the reporters. The full list is at https://www.npmjs.com/search?q=wdio-framework
    framework: 'jasmine',

    // By default, Jasmine times out within 10 seconds. This is not really enough time
    // for us as it takes a while for Appium to get set up.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    }
};


