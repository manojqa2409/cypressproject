///<reference type ="Cypress">

describe('GetTitleTextTest', () =>{

    it('Test the title of Page with Positive',() =>{

        cy.visit('/')
        cy.title().should('eq', 'Your Store')
               
    })

    it('Test the title of Page with negative',() =>{

        
        cy.visit('/')
        cy.title().should('eq', 'Your Store - Negative')
               
    })




})