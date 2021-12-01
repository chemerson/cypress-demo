module.exports = {
    apiKey: process.env.APPLITOOLS_API_KEY,
    showLogs: false,
    testConcurrency: 100,
    disableBrowserFetching: true,
    batchSequenceName: 'RCA POC',
    branchName: 'RedCross_3',
    parentBranchName: 'default',
    saveDebugData: false,
    ignoreDisplacements: false,
    polyfillAdoptedStyleSheets: true,
    failCypressOnDiff: false,
    layoutBreakpoints: false,
    browser: [
        // Add browsers with different viewports
        {width: 1024, height: 768, name: 'chrome'},
     ],
    // set batch name to the configuration
    batchName: 'Applitools Demo'
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
     