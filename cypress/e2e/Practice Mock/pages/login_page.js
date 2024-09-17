export class LoginPage {

    // Define the Variable name for Login Page locator of the element (PageName_ObectName)
    // All the Login Page Objects are stored seperated along with their locator.
    loginPage_username = '[data-test="email"] > input'
    loginPage_password = '[data-test="password"] > input'
    loginPage_loginbutton = '[data-test="login"]'
    loginPage_englishFlag = ':nth-child(1) > .select-language__flag--img'
    loginPage_logoutbutton = '.lw-header__logout > img'

    // Define methods for each sections of Login Page
    // Naviage the URL
    navigate(url) {
        cy.visit(url)
    }
    // Enter User name
    enterUserName(username) {
        // By default added 'this' keyword when used define variable instead of actual locator,  
        // which represents this variable is the Class variable. 
        // Always It represent the class variable 
        cy.get(this.loginPage_username).type(username)
    }
    // Enter Password
    enterPassword(password) {
        cy.get(this.loginPage_password).type(password)
    }
    // Click on Login button
    clickLogin() {
        cy.get(this.loginPage_loginbutton).click()
    }
    // Choose English Flag
    selectEnglishFlag() {
        cy.get(this.loginPage_englishFlag).click()
    }
    // Click on Logout button
    clickLogout() {
        cy.get(this.loginPage_logoutbutton).click()
    }
}