'use strict';
  
describe('Cypress Applitools Demo', () => {
  it('Cypress Demo', () => {

    var appName = "";
    var testName = "";
    var batchName = "";
    var matchLevel  = "";
    var branchName = "";

    cy.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        // debugger
        return false
    })
    
    // Cypress.Errors.onUncaughtException(false);
    cy.fixture("config.csv").then((config) => {
        
        var test_config = config.split('\n');
        var current_config;

        for(var i = 1; i < test_config.length; i++){

            current_config = test_config[i].split(',');

            if(current_config[0] == "app name")
            appName = current_config[1];
            else if(current_config[0] == "test name")
            testName = current_config[1];
            else if(current_config[0] == "batch name")
            batchName = current_config[1];
            else if(current_config[0] == "match level" && current_config[1] != '')
            matchLevel = current_config[1].trim();
        }

        if(batchName == "")
        batchName = testName;

            cy.fixture("urls.csv").then((urls) => {
                var my_urls = urls.split('\n');
                for(var url = 1; url < my_urls.length; url++){  
                    if(my_urls[url] != '')
                    {
                        cy.log("******************** URL#" + my_urls[url] + "********************");
                        cy.visit(my_urls[url], 
                            {
                            onLoad: (contentWindow) => {

                            },
                            failOnStatusCode: false
                        });

                        cy.window().then((win) => {
                            win.eval('document.querySelector("body").style.opacity = "1"')
                        });

                        testName = my_urls[url]
                    
                       // cy.scrollTo('bottom', {duration: 250})
                       // cy.scrollTo('top', {duration: 250})

                        cy.wait(500)

                        cy.eyesOpen({
                            appName: appName,
                            testName: testName,
                            batchName: batchName,
                            matchLevel: matchLevel,
                        });

                        cy.eyesCheckWindow({
                            tag: my_urls[url]
                        });

                        cy.eyesClose() 

                    }                       
                }
            });
        });
    });  
});
