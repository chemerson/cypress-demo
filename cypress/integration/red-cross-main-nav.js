describe("AppTest", () => {

    it(`rcoPocTest`, function () {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        }) 


        var mainMenuPrefix = '.inner > div > div > div > nav > div:nth-child('  // increment after this for each menu
        var mainMenuRegion = '.inner > div > div > div > nav > div:nth-child(1) > div > div.dropdown.dropdown-wide > div'  //replace (1) and increment

        // replaced in BCS-main-nav-hover-new.txt var hoverShadowPrefix = '.inner > div > div > div > nav > div:nth-child(1) > div > div.dropdown.dropdown-wide > div > nav:nth-child('
        var hoverShadowPrefix = '.inner > div > div > div > nav > div:nth-child(1) > div > div.dropdown.dropdown-wide.forced > div > nav:nth-child('            
        // replaced in BCS-main-nav-hover-li-new.txt var hoverBoldPrefix = '.inner > div > div > div > nav > div:nth-child(1) > div > div.dropdown.dropdown-wide.forced > div > nav:nth-child(1) > ul > li:nth-child('
        var hoverBoldPrefix = '.inner > div > div > div > nav > div:nth-child(1) > div > div.dropdown.dropdown-wide > div > nav:nth-child(1) > ul > li:nth-child('

        var content

        // Sample Test Top Red Menu hover styles
        cy.readFile('cypress/integration/BCS-main-nav-hover-new.txt')
            .then(($content) => (content = $content))
            .then(() => {
                cy.wrap(content).as('content')

                cy.get('@content').then( $content => {

                    var bcs = new Array(3);
                    bcs[0] = content
                    bcs[1] = $content.replaceAll(hoverShadowPrefix+'1',hoverShadowPrefix+'2')
                    bcs[2] = bcs[1].replaceAll(hoverShadowPrefix+'2',hoverShadowPrefix+'3')

                    // Keeping incase more menus are checked individually, but they all reference the same style so test one and you test them all
                    var regionSelector = new Array(6);
                    regionSelector[0] = mainMenuRegion
                    regionSelector[1] = mainMenuRegion.replaceAll('(1)', '(2)')
                    regionSelector[2] = regionSelector[1].replaceAll('(2)', '(3)')
                    regionSelector[3] = regionSelector[2].replaceAll('(3)', '(4)')
                    regionSelector[4] = regionSelector[3].replaceAll('(4)', '(5)')
                    regionSelector[5] = regionSelector[4].replaceAll('(5)', '(6)')

                    var tagNames = new Array(3)
                    tagNames[0] = 'Main Menu Donate - Ways to Donate Money - Hover'
                    tagNames[1] = 'Main Menu Donate - Where Your Money Goes - Hover'
                    tagNames[2] = 'Main Menu Donate - Companies and Foundations - Hover'
                    
                    cy.visit('https://redcross.org')

                    cy.eyesOpen({
                        batchName: 'Red Cross Main Nav',
                        appName: 'RCO Applitools - Cypress',
                        testName: 'Main Menu Hover Test Headings Drop Shadow',
                    })

                    for(var i=0;i<=2;i++){
                        cy.eyesCheckRegionBcs(tagNames[i], regionSelector[0], bcs[i])    
                    }
                    
                    cy.eyesCheckWindow({
                        tag: 'full page',
                        target: 'window'
                        
                    });

                    cy.eyesClose() 

                })
            })

        // Sample Test Menu sub-items bold
        cy.readFile('cypress/integration/BCS-main-nav-hover-li-new.txt')
            .then(($content) => (content = $content))
            .then(() => {
                cy.wrap(content).as('content')

                cy.get('@content').then( $content => {

                    var bcs = new Array(3);
                    bcs[0] = content
                    bcs[1] = $content.replaceAll(hoverBoldPrefix+'1',hoverBoldPrefix+'2')
                    bcs[2] = bcs[1].replaceAll(hoverBoldPrefix+'2',hoverBoldPrefix+'3')

                    // Keeping incase more menus are checked individually, but they all reference the same style so test one and you test them all
                    var regionSelector = new Array(6);
                    regionSelector[0] = mainMenuRegion
                    regionSelector[1] = mainMenuRegion.replaceAll('(1)', '(2)')
                    regionSelector[2] = regionSelector[1].replaceAll('(2)', '(3)')
                    regionSelector[3] = regionSelector[2].replaceAll('(3)', '(4)')
                    regionSelector[4] = regionSelector[3].replaceAll('(4)', '(5)')
                    regionSelector[5] = regionSelector[4].replaceAll('(5)', '(6)')

                    var tagNames = new Array(3)
                    tagNames[0] = 'Main Menu Donate - Donate Online - Hover'
                    tagNames[1] = 'Main Menu Donate - Stock Transfer - Hover'
                    tagNames[2] = 'Main Menu Donate - Monthly Gifts - Hover'

                    cy.visit('https://redcross.org')

                    cy.eyesOpen({
                        batchName: 'Red Cross Main Nav',
                        appName: 'RCO Applitools - Cypress',
                        testName: 'Main Menu Hover Test List Items Bold',
                    })

                    for(var i=0;i<=2;i++){
                        cy.eyesCheckRegionBcs(tagNames[i], regionSelector[0], bcs[i])    
                    }

                    cy.eyesClose() 

                })
            })

        // Test each main menu for layout
         cy.readFile('cypress/integration/BCS-main-nav.txt')
            .then(($content) => (content = $content))
            .then(() => {
                cy.wrap(content).as('content')

                cy.get('@content').then( $content => {

                    var bcs = new Array(6);
                    bcs[0] = content
                    bcs[1] = $content.replaceAll(mainMenuPrefix+'1',mainMenuPrefix+'2')
                    bcs[2] = bcs[1].replaceAll(mainMenuPrefix+'2',mainMenuPrefix+'3')
                    bcs[3] = bcs[2].replaceAll(mainMenuPrefix+'3',mainMenuPrefix+'4')
                    bcs[4] = bcs[3].replaceAll(mainMenuPrefix+'4',mainMenuPrefix+'5')
                    bcs[5] = bcs[4].replaceAll(mainMenuPrefix+'5',mainMenuPrefix+'6')

                    var regionSelector = new Array(6);
                    regionSelector[0] = mainMenuRegion
                    regionSelector[1] = mainMenuRegion.replaceAll('(1)', '(2)')
                    regionSelector[2] = regionSelector[1].replaceAll('(2)', '(3)')
                    regionSelector[3] = regionSelector[2].replaceAll('(3)', '(4)')
                    regionSelector[4] = regionSelector[3].replaceAll('(4)', '(5)')
                    regionSelector[5] = regionSelector[4].replaceAll('(5)', '(6)')

                    var tagNames = new Array(6)
                    tagNames[0] = 'Main Menu Donate'
                    tagNames[1] = 'Main Menu Give Blood'
                    tagNames[2] = 'Main Menu Training & Certification'
                    tagNames[3] = 'Main Menu Volunteer'
                    tagNames[4] = 'Main Menu About Us'
                    tagNames[5] = 'Main Menu Get Help'
                    

                    cy.visit('https://redcross.org')

                    cy.eyesOpen({
                        batchName: 'Red Cross Main Nav',
                        appName: 'RCO Applitools - Cypress',
                        testName: 'Main Menu Test',
                    })

                    for(var i=0;i<=5;i++){
                        cy.eyesCheckRegionBcs(tagNames[i], regionSelector[i], bcs[i])    
                    }

                    cy.eyesClose() 

                })
            }) 
    
        });
});