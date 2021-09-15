describe("rcoPocTest", () => {

    beforeEach(function() {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        }) 
        cy.eyesOpen({
            appName: 'Red Cross',
            branchName: 'Red Cross 090821',
            parentBranchName: 'cypress demo parent 1',
            testName: this.currentTest.title,
        })
    })

    afterEach(() => {
        cy.eyesClose()
    }) 
/*
    it('Applitools Demo Page', () => {
        let url = 'https://demo.applitools.com/app.html'
        cy.visit(url);
        cy.eyesCheckWindow(url)  
    })


    it('Red Cross Home Page', () => {
        let url = 'https://stage-www.redcross.org'
        cy.visit(url);
        cy.eyesCheckWindow(url)  
    })

    it('LA-Leadership url', () => {
        let url = 'https://stage-www.redcross.org/local/california/los-angeles/about-us/leadership.html'
        cy.visit(url);
        cy.eyesCheckWindow(url)  
    })
        
    it('LA-News url', () => {
        let url = 'https://stage-www.redcross.org/local/california/los-angeles/about-us/news-and-events/press-releases/red-cross-la-honors-eight-volunteers-for-exceptional-service.html'
        cy.visit(url);
        cy.eyesCheckWindow(url)  
    })
*/

    it('RCB hompage', () => {
        let url = 'https://stage-www.redcrossblood.org/'
        cy.visit(url);
        cy.get('#chat-cta', { timeout: 10000 }).should('be.visible');
        cy.eyesCheckWindow(url)  
    })

/*
    it('Local Tenessee page url', () => {
        let url = 'https://stage-www.redcross.org/local/tennessee.html'
        cy.visit(url);
        cy.eyesCheckWindow(url)  
    })

    it('RCO account sign in page url', () => {
        let url = 'https://stage-www.redcross.org/account.html/sign-in'
        cy.visit(url)
        cy.window().then((win) => {
            win.eval('document.querySelector("body").style.opacity = "1"')
        });
        cy.eyesCheckWindow(url)  
    })

    
    it('RCO about url', () => {
        let url = 'https://stage-www.redcross.org/about-us.html'
        cy.visit(url)
        cy.eyesCheckWindow(url)  
    })
    */      
});

