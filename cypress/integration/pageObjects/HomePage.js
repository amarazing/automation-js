class HomePage
{

    tbxPassword = '#exampleInputPassword1'

    getName() {
        return cy.get('form input[name="name"]')
    }

    getEmail() {
        return cy.get('form input[name="email"]')
    }

    getTwoWayDataBinding() {
        return cy.get('h4 input[name="name"]')
    }

    setPassword(password) {
        cy.get(this.tbxPassword).type(password)
    }

    getGender() {
        return cy.get('#exampleFormControlSelect1')
    }
}

export default HomePage