/// <reference types="cypress" />



describe('URL Validation Applitools', () =>{ 


    beforeEach(() {
        cy.eyesOpen({
            appName: 'cypress demo 1',
            branchName: 'cypress demo url 1',
            parentBranchName: 'cypress demo parent 1',
            testName: this.currentTest.title,
        })
    })
    afterEach(() => {
        cy.eyesClose()
    }) 

    it('URL Check 1', () => {
        let url = "https://stage-www.redcross.org/"
        cy.visit(url)
        cy.eyesCheckWindow(url)  
    })

    it('URL Check 2', () => {
        let url = "https://stage-www.redcross.org/local/california/los-angeles/about-us/leadership.html"
        cy.visit(url)
        cy.eyesCheckWindow(url) 
    })
    
})
