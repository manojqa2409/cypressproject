///<reference types="cypress"/>

describe('Logout', () =>{

    beforeEach(() =>{
		cy.session('loginSession', () => {
				cy.login();
				cy.wait(5000)
			})
	})

    it('TC-001 -> Logout from the application', () => {
        cy.visit('/');
        cy.wait(3000)
        /*logout*/
        cy.get('.lw-header__logout > img').click({force: true})
    })

})