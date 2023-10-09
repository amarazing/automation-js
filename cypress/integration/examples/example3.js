
//Spec file or Test file
describe('My Second Test Suite', () => {
    it('My First Test Case in Second Suite', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //ALERTS
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        
        //Trigger ALERT/CONFIRM event in Cypress to capture
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //NEW TABS WITH NEW DOMAIN
        cy.get('#opentab').invoke('removeAttr','target').click()
    
        cy.origin('https://www.qaclickacademy.com',() => {
            cy.get('#navbarSupportedContent a[href*="about"]').click()
            cy.get('.mt-50 h2').should('contain','QAClick Academy')
        })
    })
})