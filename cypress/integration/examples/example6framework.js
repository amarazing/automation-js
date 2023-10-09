import HomePage from "../pageObjects/HomePage"

//Spec file or Test file
describe('My Second Test Suite', () => {
    before(() => {
        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })
    it('My First Test Case in Second Suite', function() {

        const homePage = new HomePage()
        //FIXTURES and PAGE OBJECT DESIGN PATTERN
        cy.visit(Cypress.env('url') + '/angularpractice/')
        homePage.tbxPassword
        homePage.getName().type(this.data.name)
        homePage.getName().should('have.attr', 'minlength', 2)
        homePage.getName().should('have.value', this.data.name)
        homePage.getEmail().type(this.data.email)
        homePage.setPassword(this.data.password)
        homePage.getGender().select(this.data.gender)
        cy.get('#inlineRadio1').check()
        cy.get('#inlineRadio3').should('be.disabled')
        cy.pause()
        
        cy.get('li:nth-child(2) a').click()
       
        //COMMANDS and PARAMETERIZE TEST DATA
        this.data.productNames.forEach(function(products) {
            cy.selectProduct(products)
        })

        
        cy.get('#navbarResponsive a').click()
        //CALCULATE SUM
        let sum = 0
        cy.get('tr td:nth-child(4) > strong').each(($el, index, $list) => {
            let num = Number($el.text().split(' ')[1])
            sum = sum + num
        }).then(() => {
            cy.log('sum: ' + sum) //resolve promise so sum will be printed after computation
        })
        cy.get('tbody .text-right strong').then((value) => {
            let actualSum = Number(value.text().split(' ')[1])
            expect(actualSum).to.equal(sum)
        })

        

        //CONTINUE STEPS
        cy.get('button[class*="success"]').click()
        cy.get('#country').type('India')

        //CONFIG
        Cypress.config('defaultCommandTimeout', 8000)
        cy.get('div.suggestions a').click()
        cy.get('[type="submit"]').click()
        cy.get('[class*="alert"]').should('contain', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        
    })
})