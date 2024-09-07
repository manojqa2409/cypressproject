describe('Search Feature', () =>{

    it('Test the Search Feature, with Positive chars', () =>{
        cy.visit('/')
        // Click on Search text box & type search item
        cy.get("[placeholder='Search']").type("iPhone")
        // Click on Search button
        cy.get("#search button").click()
        // Assert the text for first search result
        cy.get(".product-layout:first-child h4:first-of-type a").contains("iPhone")

    })
})