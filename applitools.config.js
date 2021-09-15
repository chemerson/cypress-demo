module.exports = {
    apiKey: process.env.APPLITOOLS_API_KEY,
    showLogs: false,
    concurrency: 25,
    disableBrowserFetching: false,
    failCypressOnDiff: false,
    batchSequenceName: 'RCA POC',
    saveDebugData: false,
    ignoreDisplacement: true,
    //
    browser: [
        // Add browsers with different viewports
        {width: 1024, height: 768, name: 'chrome'},
        {width: 1024, height: 768, name: 'firefox'},
        {width: 1024, height: 768, name: 'safari'},
        {width: 1024, height: 768, name: 'chrome-one-version-back'},
        {width: 1024, height: 768, name: 'firefox-one-version-back'},
        {width: 1024, height: 768, name: 'safari-one-version-back'},
         { iosDeviceInfo: {deviceName: 'iPhone X', 
          screenOrientation: 'portrait', 
          version: 'latest'}},
        { iosDeviceInfo: {deviceName: 'iPhone 12', 
          screenOrientation: 'portrait', 
          version: 'latest'}},
        { chromeEmulationInfo: {deviceName: 'Pixel 4 XL'}} 
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
     