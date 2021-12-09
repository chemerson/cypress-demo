describe("AppTest", () => {

    it(`rcoPocTest`, function () {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        }) 


        var content = cy.readFile('cypress/integration/BCS-main-nav.txt','utf8');
        cy.log(content)

/*          
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
    
        cy.wait(500)

        cy.eyesCheckWindow({
            tag: "Main Menu - Donate",
            target: 'window',
            fully: true
        });

        
        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
        
        */

    });
});