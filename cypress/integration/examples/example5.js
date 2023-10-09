/// <reference types = "Cypress"/>
/// <reference types = "cypress-iframe"/>
import 'cypress-iframe'

//Spec file or Test file
describe('My Second Test Suite', () => {
    it('My First Test Case in Second Suite', () => {
    
        //IFRAME
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.wait(2000)
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)
    })
})