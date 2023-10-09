
//Spec file or Test file
describe('My Second Test Suite', () => {
    it('My First Test Case in Second Suite', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //TABLES
        cy.get('[name="courses"] tbody tr td:nth-child(2)').each(($el, index, $list) => {
            
            if($el.text().includes('Python Language')) {
                // cy.get($list).eq(index).next().should('have.text', '25') <-- this works also

                cy.get('[name="courses"] tbody tr td:nth-child(2)').eq(index).next().then((price) => {
                    expect(price.text()).to.equal('25')
                })
            }
        })

        //MOUSEHOVER
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })
})