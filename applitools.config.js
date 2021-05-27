module.exports = {
    apiKey: '8olVp8YyRm7JTrCEN3w4GfY6K5rw110GVai3x2K104WeLpQ110',
    showLogs: false,
    concurrency: 10,
    //
    browser: [
        // Add browsers with different viewports
        {width: 1024, height: 768, name: 'chrome'},
        {width: 1024, height: 768, name: 'firefox'},
        {width: 1024, height: 768, name: 'safari'},
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

     