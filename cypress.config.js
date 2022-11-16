const { defineConfig } = require('cypress')

module.exports = defineConfig({
  pageLoadTimeout: 360000,
  defaultCommandTimeout: 3000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })

      return require('./cypress/plugins/index.js')(on, config)
    },
  },
  video: false,
})
