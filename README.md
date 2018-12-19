# appium-e2e-test

**Install Appium**

(For more information, see: https://medium.com/the-web-tub/testing-cordova-apps-with-appium-2b3b236e026b)

**Install required npm packages (as part of the app project)**

```$ npm install appium appium-doctor webdriverio wdio-appium-service wdio-jasmine-framework wdio-spec-reporter --save-dev```

**Remarks**: In the actual project, they are already saved to the package.json

**Check Appium conformity**

```$ npm run appium-doctor```

Fix all the reported errors

You might have to upgrade certain libriares to their HEAD versions (to make the device proxy work)
See https://github.com/google/ios-webkit-debug-proxy/blob/master/README.md

```$ brew install carthage```

```$ brew install ideviceinstaller```

```$ npm install -g ios-deploy```

```$ brew install --HEAD usbmuxd```

```$ brew install --HEAD libimobiledevice```

```$ brew install -s ios-webkit-debug-proxy```

```$ xcode-select --install```

(Depending on your actual configuration, you might have to unlink or upgrade, see response when executing the above listed statements.)

**How to inspect Native elements**

Install Appium Desktop: https://github.com/appium/appium-desktop

**Build and Run the actual project**

```$ npm install```

**For testing in simulator:**

```$ npm run build-simulator``` (only once after app changes)

```$ npm run test-simulator```

**For testing on physical device:**

*Set parameters in ./e2e-tests/wdio.device.conf.js)*

```$ npm run build-device```  (only once after app changes)

```$ npm run test-device```
