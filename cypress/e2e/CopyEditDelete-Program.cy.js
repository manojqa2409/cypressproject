///<reference types="cypress"/>

describe('template spec', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Handle uncaught exception
    })
 
    /* ==== Test Created with Cypress Studio ==== */
    it('Settings-Program-CURD', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://localhost:8081/gui');

      cy.wait(5000)
  
      cy.get('[data-test="email"] > input').type('manoj.kumar@logiwaste.se');
      cy.wait(5000)
      cy.get('[data-test="password"] > input').type('M@noj!23$');
      cy.wait(5000)
      cy.get('.button__label').click();
      cy.wait(10000)
      cy.get(':nth-child(1) > .select-language__flag--img').dblclick();
      cy.wait(3000)
      cy.get('.lw-tab__item > img').click({force :true});
      cy.wait(6000)

      
  // Copy Action in Program Tab - Working fine

  cy.get('.MuiTable-root').first()
  .contains('tr', 'komal')
  .find('td').first()
  .find('svg.MuiSvgIcon-root').eq(0).click()
  cy.wait(10000)

  // Edit Program

  cy.get('.MuiTable-root').first()
  .contains('tr', 'komal')
  .find('td').first()
  .find('svg.MuiSvgIcon-root').eq(1).click()
  cy.wait(10000)
  cy.get('[title="Cancel"]').click()
  cy.wait(10000)

// Delete Program
  cy.get('.MuiTable-root').first()
  .contains('tr', 'komal')
  .find('td').first()
  .find('svg.MuiSvgIcon-root').eq(2).click()
  cy.wait(10000)
  cy.get('[title="Save"]').click()
  cy.wait(10000)

    /*
      cy.get('[index="0"] > .MuiTableCell-paddingNone > div > [title="Copy"]').click({force: true})
      cy.wait(10000)
      //cy.get('[index="0"] > .MuiTableCell-paddingNone > div > [title="Edit"]').click({force: true})
      //cy.wait(10000)
      cy.get('[index="0"] > .MuiTableCell-paddingNone > div > [title="Delete"]').click({force: true})
      cy.wait(10000)
      cy.get('[title="Cancel"]').click()
      cy.wait(10000)
      cy.get('[index="0"] > .MuiTableCell-paddingNone > div > [title="Delete"]').click({force: true})
      cy.wait(10000)
      cy.get('[title="Save"]').click()
      cy.wait(10000)*/

      cy.get('.lw-header__logout > img').click();
      cy.wait(5000)

    })

})