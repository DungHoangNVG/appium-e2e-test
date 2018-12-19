# appium-e2e-test

```$ npm install```

**For testing in simulator:**

*(Check parameters in ./e2e-tests/wdio.simulator.conf.js)*

```$ npm run build-simulator``` (only once after app changes)

```$ npm run test-simulator```

**For testing on physical device:**

*(Check parameters in ./e2e-tests/wdio.device.conf.js)*

```$ npm run build-device```  (only once after app changes)

```$ npm run test-device```