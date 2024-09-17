import { LoginPage } from "../pages/login_page"

const loginPage = new LoginPage()

//describe('LGW-PageObject', () =>{

it('Login', () => {
    // Taking data from 'userData.json' file to make more reusable the code
    cy.fixture('userData.json').then((user) => {
        loginPage.navigate(user.url)
        loginPage.enterUserName(user.username)
        loginPage.enterPassword(user.password)
    })
    loginPage.clickLogin()
    loginPage.selectEnglishFlag()
    loginPage.clickLogout()

    /*cy.visit('/')
    cy.get('[data-test="email"] > input').type('manoj.kumar@logiwaste.se')
    cy.get('[data-test="password"] > input').type('M@noj!23$')
    cy.get('[data-test="login"]').click()
    cy.get(':nth-child(1) > .select-language__flag--img').click()
    cy.get('.lw-header__logout > img').click()*/
})
//})