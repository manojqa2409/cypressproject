describe('GetText Feature', () => {

    // Using JQuery method
    it('Test the GetText Feature - Using JQuery method', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('h1').then(($el) => {
            let value = $el.text()
            cy.log(value)
        });
    });

    // Using the Assertion where need to use (should)
    it('Test the Gettext Feature - Using the Assertion where need to use (should)', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('h1').should('have.text', 'Practice Page');
                
    });

    // Using the Invoke function
    it('Test the GetText Feature - Using the Invoke function', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('h1').invoke('text').then((text) => {
            
            // BDD Style Assertation
            expect(text).to.eq('Practice Page')
            cy.log(text)

        });
        
    });
    
});