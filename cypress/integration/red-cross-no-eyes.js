describe("AppTest", () => {

 

    it(`rcoPocTest`, function () {
         cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) 


                  // Navigate to the homepage url we want to test
        //cy.visit('https://stage-www.redcross.org/account.html/sign-in');
        cy.visit('https://stage-www.redcross.org/about-us.html')
        
    });

 

});