describe("AppTest", () => {

    it(`rcoPocTest`, function () {
         cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) 

                  // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'RCO Applitools - Cypress',
            testName: 'Smoke Test Home Page - Cypress',
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

        // Navigate to the LA-Leadership url to test
        cy.visit('https://www.redcross.org/local/california/los-angeles/about-us/leadership.html');
                     
        // Check the RCO LA - Leadership page
        cy.eyesCheckWindow({
            tag: "Stage LA - Leadership",
            target: 'window',
            fully: true
        });
                               
        // Navigate to the LA-News url to test

        cy.visit('https://www.redcross.org/local/california/los-angeles/about-us/news-and-events/press-releases/red-cross-la-honors-eight-volunteers-for-exceptional-service.html');                   

        // Check the RCO LA - Leadership page
        cy.eyesCheckWindow({
            tag: "Stage LA - News",
            target: 'window',
            fully: true
        });

        // Navigate to the RCB home page url to test
        cy.visit('https://www.redcrossblood.org/');

        // Check the RCB homepage
        cy.eyesCheckWindow({
            tag: "Stage RCB Homepage",
            target: 'window',
            fully: true
        });

        // Navigate to the Local Tenessee page url to test
        cy.visit('https://www.redcross.org/local/tennessee.html');
                
        // Check the Local Tenessee page
        cy.eyesCheckWindow({
            tag: "Stage Local Tenessee page",
            target: 'window',
            fully: true
        });                

        // Navigate to the RCO account sign in page url to test
        cy.visit('https://www.redcross.org/account.html/sign-in');

        // Check the Local Tenessee page
        cy.eyesCheckWindow({
            tag: "Stage RCO account sign in",
            target: 'window',
            fully: true
        }); 

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });
});