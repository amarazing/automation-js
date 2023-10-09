
//Spec file or Test file
describe('My First Test Suite', () => {
    it('My First Test Case', () => {
        //   expect(true).to.equal(true)

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type("ca")
        cy.wait(2000)
        
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').as('productList') // set variable productList
        cy.get('@productList').each(($el, index, $list) => {
            const getValue = $el.find('h4.product-name').text()
            if (getValue.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then((logoElement) => {
            cy.log(logoElement.text()) 
        })
        // cy.get('.brand').text() - does not work as brand was not resolve
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})