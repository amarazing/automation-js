
//Spec file or Test file
describe('My Second Test Suite', () => {
    it('My First Test Case in Second Suite', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //CHECKBOX
        cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('input#checkBoxOption1').uncheck().should('not.be.checked').and('not.have.value','optionNot')

        // cy.get('#checkbox-example fieldset label').find('input').each(function($el,index,$list) {
        //     cy.log($el)
        //     cy.get($el).check().should('be.checked');
        // }) <-- this can be done by using the step below
        cy.get('#checkbox-example fieldset label').find('input').check(['option2','option3'])

        //RADIO BUTTON
        cy.get('[for="radio2"] > .radioButton').check().should('be.checked')

        //STATIC DROPDOWN
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

        //DYNAMIC DROPDOWN
        //Type 'ind' in search
        cy.get('#autocomplete').as('searchBox').type('ind')
        //Search and click India
        cy.get('.ui-menu-item div').each(function($el,index,$list) {
            if($el.text() === 'India') {
                cy.wrap($el).click()
            }
        })
        //Verify India
        cy.get('@searchBox').should('have.value','India')

        //VISIBILITY
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })
})