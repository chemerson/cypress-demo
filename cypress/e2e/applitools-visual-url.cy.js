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
        let url = "https://the-internet.herokuapp.com/"
        cy.visit(url)
        cy.eyesCheckWindow(url)  
    })

    it('URL Check 2', () => {
        let url = "https://the-internet.herokuapp.com/abtest"
        cy.visit(url)
        cy.eyesCheckWindow(url) 
    })

    it('URL Check 3', () => {
        let url = "https://the-internet.herokuapp.com/add_remove_elements/"
        cy.visit(url)
        cy.eyesCheckWindow(url)  
    })

    it('URL Check 4', () => {
        let url = "https://the-internet.herokuapp.com/checkboxes"
        cy.visit(url)
        cy.eyesCheckWindow(url) 
    })
    
})
