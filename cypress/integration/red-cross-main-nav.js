describe("AppTest", () => {

    it(`rcoPocTest`, function () {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        }) 


        var mainMenuPrefix = '.inner > div > div > div > nav > div:nth-child('  // increment after this for each menu
        var mainMenuRegion = '.inner > div > div > div > nav > div:nth-child(1) > div > div.dropdown.dropdown-wide > div'  //replace (1) and increment

        var hoverShadowPrefix = '.inner > div > div > div > nav > div:nth-child(1) > div > div.dropdown.dropdown-wide > div > nav:nth-child('
        var hoverBoldPrefix = '.inner > div > div > div > nav > div:nth-child(1) > div > div.dropdown.dropdown-wide.forced > div > nav:nth-child(1) > ul > li:nth-child('

        var content

        // Sample Test Top Red Menu hover styles
        cy.readFile('cypress/integration/BCS-main-nav-hover.txt')
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
                    

                    cy.visit('https://redcross.org')

                    cy.eyesOpen({
                        batchName: 'Red Cross Main Nav',
                        appName: 'RCO Applitools - Cypress',
                        testName: 'Main Menu Hover Test Headings Drop Shadow',
                    })

                    cy.eyesCheckWindow({
                        tag: 'Main Menu Donate - Ways to Donate Money - Hover',
                        target: 'region',
                        selector: {
                            type: 'css',
                            selector: regionSelector[0]
                        },
                        scriptHooks: {
                            beforeCaptureScreenshot: bcs[0]
                        }
                    });

                    cy.eyesCheckWindow({
                        tag: 'Main Menu Donate - Where Your Money Goes - Hover',
                        target: 'region',
                        selector: {
                            type: 'css',
                            selector: regionSelector[0]
                        },
                        scriptHooks: {
                            beforeCaptureScreenshot: bcs[1]
                        }
                    });

                    cy.eyesCheckWindow({
                        tag: 'Main Menu Donate - Companies and Foundations - Hover',
                        target: 'region',
                        selector: {
                            type: 'css',
                            selector: regionSelector[0]
                        },
                        scriptHooks: {
                            beforeCaptureScreenshot: bcs[2]
                        }
                    });

                    cy.eyesClose() 

                })
            })

        // Sample Test Menu sub-items bold
        cy.readFile('cypress/integration/BCS-main-nav-hover-li.txt')
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
                    

                    cy.visit('https://redcross.org')

                    cy.eyesOpen({
                        batchName: 'Red Cross Main Nav',
                        appName: 'RCO Applitools - Cypress',
                        testName: 'Main Menu Hover Test List Items Bold',
                    })

                    cy.eyesCheckWindow({
                        tag: 'Main Menu Donate - Donate Online - Hover',
                        target: 'region',
                        selector: {
                            type: 'css',
                            selector: regionSelector[0]
                        },
                        scriptHooks: {
                            beforeCaptureScreenshot: bcs[0]
                        }
                    });

                    cy.eyesCheckWindow({
                        tag: 'Main Menu Donate - Stock Transfer - Hover',
                        target: 'region',
                        selector: {
                            type: 'css',
                            selector: regionSelector[0]
                        },
                        scriptHooks: {
                            beforeCaptureScreenshot: bcs[1]
                        }
                    });

                    cy.eyesCheckWindow({
                        tag: 'Main Menu Donate - Monthly Gifts - Hover',
                        target: 'region',
                        selector: {
                            type: 'css',
                            selector: regionSelector[0]
                        },
                        scriptHooks: {
                            beforeCaptureScreenshot: bcs[2]
                        }
                    });

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
                    

                    cy.visit('https://redcross.org')

                    cy.eyesOpen({
                        batchName: 'Red Cross Main Nav',
                        appName: 'RCO Applitools - Cypress',
                        testName: 'Main Menu Test',
                    })

                    cy.eyesCheckWindow({
                        tag: 'Main Menu Donate',
                        target: 'region',
                        selector: {
                            type: 'css',
                            selector: regionSelector[0]
                        },
                        scriptHooks: {
                            beforeCaptureScreenshot: bcs[0]
                        }
                    });

                    cy.eyesCheckWindow({
                        tag: "Main Menu Give Blood",
                        target: 'region',
                        selector: {
                            type: 'css',
                            selector: regionSelector[1]
                        },
                        scriptHooks: {
                            beforeCaptureScreenshot: bcs[1]
                        }
                    });

                    cy.eyesCheckWindow({
                        tag: "Main Menu Training & Certification",
                        target: 'region',
                        selector: {
                            type: 'css',
                            selector: regionSelector[2]
                        },
                        scriptHooks: {
                            beforeCaptureScreenshot: bcs[2]
                        }
                    });

                    cy.eyesCheckWindow({
                        tag: "Main Menu Volunteer",
                        target: 'region',
                        selector: {
                            type: 'css',
                            selector: regionSelector[3]
                        },
                        scriptHooks: {
                            beforeCaptureScreenshot: bcs[3]
                        }
                    });

                    cy.eyesCheckWindow({
                        tag: "Main Menu About Us",
                        target: 'region',
                        selector: {
                            type: 'css',
                            selector: regionSelector[4]
                        },
                        scriptHooks: {
                            beforeCaptureScreenshot: bcs[4]
                        }
                    });

                    cy.eyesCheckWindow({
                        tag: "Main Menu Get Help",
                        target: 'region',
                        selector: {
                            type: 'css',
                            selector: regionSelector[5]
                        },
                        scriptHooks: {
                            beforeCaptureScreenshot: bcs[5]
                        }
                    });
                    cy.eyesClose() 

                })
            }) 
    
        });
});