///<reference type ="Cypress">

describe('GetTextTest', () =>{

    it('Test the getText',function (){

        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.logo > img').click();
        cy.log('text found')

        cy.log(Cypress.browser);

    })




})