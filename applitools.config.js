module.exports = {
    apiKey: process.env.APPLITOOLS_API_KEY,
    showLogs: false,
    testConcurrency: 100,
    disableBrowserFetching: true,
    batchSequenceName: 'RCA POC',
    branchName: 'Cypress 061722B',
    parentBranchName: 'default',
    appName: 'cypress demo 1',
    saveDebugData: false,
    ignoreDisplacements: false,
    polyfillAdoptedStyleSheets: true,
    failCypressOnDiff: false,
    layoutBreakpoints: true,
    waitBeforeCapture: 250,
    accessibilityValidation: {level: 'AA', guidelinesVersion: 'WCAG_2_0'},
    browser: [
        // Add browsers with different viewports
        {width: 1024, height: 768, name: 'chrome'},
        {width: 1024, height: 768, name: 'firefox'},
        {width: 1024, height: 768, name: 'safari'},
        {width: 1024, height: 768, name: 'chrome-one-version-back'},
        {width: 1024, height: 768, name: 'firefox-one-version-back'},
        {width: 1024, height: 768, name: 'safari-one-version-back'},
        {width: 500, height: 768, name: 'chrome'},
        {width: 500, height: 768, name: 'firefox'},
        {width: 500, height: 768, name: 'safari'},
        {width: 500, height: 768, name: 'chrome-one-version-back'},
        {width: 500, height: 768, name: 'firefox-one-version-back'},
        {width: 500, height: 768, name: 'safari-one-version-back'},
        { iosDeviceInfo: {deviceName: 'iPhone X', 
          screenOrientation: 'portrait', 
          version: 'latest'}},
        { iosDeviceInfo: {deviceName: 'iPhone 12', 
          screenOrientation: 'portrait', 
          version: 'latest'}},
        { chromeEmulationInfo: {deviceName: 'Pixel 4 XL'}} 
     ],
    // set batch name to the configuration
    batchName: 'Applitools Demo (Cypress)'
  }

  /** chrome
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
     