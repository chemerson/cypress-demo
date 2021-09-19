describe("sandbox", () => {

    beforeEach(function() {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        }) 
        cy.eyesOpen({
            appName: 'Sandbox',
            branchName: 'Sandbox 090821',
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
    }) */

    function getPageHeight(win) {
        var clientHeight = win.document.documentElement.clientHeight
        var bodyClientHeight = win.document.body.clientHeight
        var scrollHeight = win.document.documentElement.scrollHeight
        var bodyScrollHeight = win.document.body.scrollHeight
        var maxDocElementHeight = Math.max(clientHeight, scrollHeight);
        var maxBodyHeight = Math.max(bodyClientHeight, bodyScrollHeight);
        return Math.max(maxDocElementHeight, maxBodyHeight);
    };

    function lazyLoadPage(win) {
        var height =  win.innerHeight
        var pageHeight = getPageHeight(win);
        win.scrollTo(0,2000)
        for (var j = 0; j < pageHeight; j += (height - 15)) {
            win.scrollTo(0,j)
            height =  win.innerHeight
            pageHeight = getPageHeight(win);
            //cy.wait(2000);
        }
        win.scrollTo(0, 0)
        //cy.wait(500)
    };

    it('Long Page', () => {
        // let url = 'https://en.wikipedia.org/wiki/Atom'
        let url = 'https://wayfair.com'
        cy.visit(url,
        {
            onLoad: (win) => {

            }           
        });

        cy.eyesCheckWindow(url)  
    })
    



/*
    async function getPageHeight(driver) {
    var clientHeight = await driver.executeScript("return document.documentElement.clientHeight");
    var bodyClientHeight = await driver.executeScript("return document.body.clientHeight");
    var scrollHeight = await driver.executeScript("return document.documentElement.scrollHeight");
    var bodyScrollHeight = await driver.executeScript("return document.body.scrollHeight");
    var maxDocElementHeight = Math.max(clientHeight, scrollHeight);
    var maxBodyHeight = Math.max(bodyClientHeight, bodyScrollHeight);
    return Math.max(maxDocElementHeight, maxBodyHeight);
    };

    async function lazyLoadPage(driver) {
    var height =  await driver.executeScript("return window.innerHeight");
    var pageHeight = await getPageHeight(driver);
    for (var j = 0; j < pageHeight; j += (height - 15)) {
        await driver.executeScript("window.scrollTo(0," + j + ")");
        height =  await driver.executeScript("return window.innerHeight");
        pageHeight = await getPageHeight(driver);
        sleep.msleep(2000);
    }
    await driver.executeScript("window.scrollTo(0, 0);");
    sleep.msleep(500);
    };
*/

});