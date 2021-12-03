describe("AppTest", () => {

    it(`rcoPocTest`, function () {
         cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) 

                  // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            batchName: 'Red Cross Main Nav',
            appName: 'RCO Applitools - Cypress',
            testName: 'Main Nav Home Page - Cypress',
        })

        // Navigate to the homepage url we want to test
        cy.visit('https://www.redcross.org');

        // check the Homepage with fluent api, see more info here
        // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
        cy.eyesCheckWindow({
            tag: "Stage Home Page",
            target: 'window',
            fully: true
        });

        
        //Cypress does not support CSS :hover - it can only fire normal events
         cy.get('div.menu-container > div.global-nav.inner > div > div > div > nav > div:nth-child(1) > div > div.main-nav-link').trigger('mouseover', { eventConstructor: 'MouseEvent' })
        
       // cy.get('div.menu-container > div.global-nav.inner > div > div > div > nav > div:nth-child(1) > div > div.main-nav-link')
       // .trigger('mousedown', { which: 1 })
       // .trigger('mousemove', { clientX: 100, clientY: 100 })
       // .trigger('mouseup', { force: true })

        cy.wait(5000)
        
        cy.get('div:nth-child(1) > div > div.dropdown.dropdown-wide').should('be.visible')

        cy.eyesCheckWindow({
            tag: "Main Menu - Donate",
            target: 'window',
            fully: true
        });

        
        cy.get('div.menu-container > div.global-nav.inner > div > div > div > nav > div:nth-child(2) > div > div.main-nav-link').trigger('mouseover')
        cy.get('div:nth-child(2) > div > div.dropdown.dropdown-wide').should('be.visible')

        cy.eyesCheckWindow({
            tag: "Main Menu - Give Blood",
            target: 'window',
            fully: true
        });
        

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });
});