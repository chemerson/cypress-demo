module.exports = {
    apiKey: '8pVdTA8n6joSM18VHrggfo9OHmhaFjepyAbkdrZ1NcU110',
    showLogs: false,
    concurrency: 10,
    //
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
        {width: 800, height: 600, name: 'firefox'},
        {width: 1600, height: 1200, name: 'ie11'},
        {width: 1024, height: 768, name: 'edgechromium'},
        {width: 800, height: 600, name: 'safari'},
        { iosDeviceInfo: {deviceName: 'iPhone X', 
          screenOrientation: 'portrait', 
          version: 'latest'}},
        { iosDeviceInfo: {deviceName: 'iPhone 12', 
          screenOrientation: 'portrait', 
          version: 'latest'}},
        { chromeEmulationInfo: {deviceName: 'Pixel 4 XL'}}
     ],
    // set batch name to the configuration
    batchName: 'Cypress Demo'
  }

     