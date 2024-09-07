/*Assertion - Two types - Implicit - Explicit*/

describe('Perform Cypress Assertion', () => {
    it('Implicit Assertion', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.url().should('include', 'rahulshettyacademy.com')
        .and('eq', 'https://rahulshettyacademy.com/AutomationPractice/')
        .and('contain', 'Practice Page')
        .and('not.contain', 'No Practice Page')
        
        
    });

    it('Explicit Assertion', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.eq('Practice Page')
            cy.log(text)
            assert.equal('Practice Page','Practice Page')
            cy.get('h1').contains('Practice Page').click()
        })
    });
    
});