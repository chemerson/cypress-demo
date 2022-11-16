module.exports = {
    apiKey: process.env.APPLITOOLS_API_KEY,
    eyesIsDisabled: false,
    showLogs: false,
    testConcurrency: 100,
    batchSequenceName: 'Cypress 1',
    branchName: 'Cypress 111122_1',
    parentBranchName: 'default',
    appName: 'cypress demo 1',
    dontCloseBatches: false,
    saveDebugData: false,
    ignoreDisplacements: true,
    polyfillAdoptedStyleSheets: true,
    failCypressOnDiff: false,
    layoutBreakpoints: true,
    waitBeforeCapture: 250,
    accessibilityValidation: {level: 'AA', guidelinesVersion: 'WCAG_2_0'},
    browser: [
        // Add browsers with different viewports
        {width: 500, height: 1000, name: 'chrome'},
        {width: 500, height: 1000, name: 'firefox'},
        {width: 500, height: 1000, name: 'safari'},
        {width: 1500, height: 1000, name: 'chrome'},
        {width: 1500, height: 1000, name: 'firefox'},
        {width: 1500, height: 1000, name: 'safari'},
        { iosDeviceInfo: {deviceName: 'iPhone 12', 
          screenOrientation: 'portrait', 
          version: 'latest'}},
        { iosDeviceInfo: {deviceName: 'iPhone 14', 
          screenOrientation: 'portrait', 
          version: 'latest'}},
        { chromeEmulationInfo: {deviceName: 'Pixel 4 XL'}} 
     ],
    // set batch name to the configuration
    batchName: 'Applitools Demo (Cypress)'
  }

  /** 
   * 
   *  baselineEnvName: 'Mac OS X 12.6 Safari 16.0 1500x1000',
   * 
   * chrome
* chrome-canary
* firefox
* ie10
* ie11
* edgechromium
* edgelegacy
* ie
* safari
* safari-earlyaccess
* chrome-one-version-back
* chrome-two-versions-back
* firefox-one-version-back
* firefox-two-versions-back
* safari-one-version-back
* safari-two-versions-back
* edgechromium-one-version-back
* edgechromium-two-versions-back
*/
     