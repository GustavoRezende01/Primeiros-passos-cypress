import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardpage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage () 


describe('orange hmr', () => {

  const selectorslist = {
    firstNameField: "[name='firstName']",
    midNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericFild: '.oxd-input--active',
    submitButton: "[type='submit']",
    buttonSelect: '.oxd-select-text--arrow',
    selectNationality: ':nth-child(26) > span',
    maritalStatus: '.oxd-select-dropdown > :nth-child(4)',


  }


  it.only('user info update-sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.usersuccess.username, userData.usersuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()

    cy.get(selectorslist.firstNameField).clear({ force: true }).type('userTest')
    cy.get(selectorslist.midNameField).click().clear().type('midNameTest')
    cy.get(selectorslist.lastNameField).click().clear().type('lastTeste')
    cy.get(selectorslist.genericFild).eq(4).click().clear().type('empTest')
    cy.get(selectorslist.genericFild).eq(5).clear().type('otherTest')
    cy.get(selectorslist.genericFild).eq(6).clear().type('DriveTest')
    cy.get(selectorslist.genericFild).eq(7).clear({ force: true }).type('2025-07-22').click()
    cy.get(selectorslist.buttonSelect).eq(0).click()
    cy.get(selectorslist.selectNationality).click()
    cy.get(selectorslist.buttonSelect).eq(1).click()
    cy.get(selectorslist.maritalStatus).click()
    cy.get(selectorslist.submitButton).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')





  })


  it('login- fail', () => {
    cy.visit('auth/login')
    cy.get(selectorslist.userNameFild).type(userData.userFail.username)
    cy.get(selectorslist.passwordfild).type(userData.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)

  })

})
