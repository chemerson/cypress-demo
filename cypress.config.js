const { defineConfig } = require('cypress')

module.exports = defineConfig({
  pageLoadTimeout: 360000,
  eyesIsDisabled: false,
  eyesBrowser:
    '[{"width":1024,"height":768,"name":"chrome"},{"width":1024,"height":768,"name":"firefox"},{"width":1024,"height":768,"name":"safari"},{"width":1024,"height":768,"name":"chrome-one-version-back"},{"width":1024,"height":768,"name":"firefox-one-version-back"},{"width":1024,"height":768,"name":"safari-one-version-back"},{"width":500,"height":768,"name":"chrome"},{"width":500,"height":768,"name":"firefox"},{"width":500,"height":768,"name":"safari"},{"width":500,"height":768,"name":"chrome-one-version-back"},{"width":500,"height":768,"name":"firefox-one-version-back"},{"width":500,"height":768,"name":"safari-one-version-back"},{"iosDeviceInfo":{"deviceName":"iPhone X","screenOrientation":"portrait","version":"latest"}},{"iosDeviceInfo":{"deviceName":"iPhone 12","screenOrientation":"portrait","version":"latest"}},{"chromeEmulationInfo":{"deviceName":"Pixel 4 XL"}}]',
  eyesLayoutBreakpoints: 'false',
  eyesFailCypressOnDiff: false,
  eyesDisableBrowserFetching: true,
  eyesLegacyHooks: true,
  eyesTestConcurrency: 100,
  eyesPort: 53136,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
