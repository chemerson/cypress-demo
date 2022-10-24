module.exports = {
    apiKey: process.env.APPLITOOLS_API_KEY,
    showLogs: false,
    testConcurrency: 10,
    disableBrowserFetching: true,
    batchSequenceName: 'RCA POC',
    branchName: 'Cypress 051222B',
    parentBranchName: 'default',
    saveDebugData: false,
    ignoreDisplacements: false,
    polyfillAdoptedStyleSheets: true,
    failCypressOnDiff: false,
    layoutBreakpoints: false,
    waitBeforeCapture: 250,
    browser: [
        // Add browsers with different viewports
        {width: 1024, height: 768, name: 'chrome'},
        {width: 1024, height: 768, name: 'firefox'},
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
