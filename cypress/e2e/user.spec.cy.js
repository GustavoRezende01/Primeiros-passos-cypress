import userData from '../fixtures/user-data.json'

describe('orange hmr', () => {

  const selectorslist = {
    userNameFild: "[name='username']",
    passwordfild: "[name='password']",
    loginButton: "[type='submit']",
    dashboardgrid: ".orangehrm-dashboard-grid",
    sectiontitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    midNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericFild: '.oxd-input--active',
    submitButton: "[type='submit']",

  }


  it.only('user info update-sucess', () => {

    cy.visit('auth/login')
    cy.get(selectorslist.userNameFild).type(userData.usersuccess.username)
    cy.get(selectorslist.passwordfild).type(userData.usersuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardgrid)
    cy.get(selectorslist.myInfoButton).click() 
    cy.get(selectorslist.firstNameField).click().clear().type('userTest')
    cy.get(selectorslist.midNameField).click().clear().type('midNameTest')
    cy.get(selectorslist.lastNameField).click().clear().type('lastTeste')
    cy.get(selectorslist.genericFild).eq(3).click().clear().type('empTest')
    cy.get(selectorslist.genericFild).eq(4).clear().type('otherTest')
    cy.get(selectorslist.genericFild).eq(5).clear().type('DriveTest')
    cy.get(selectorslist.genericFild).eq(6).clear().type('2025-07-22').click()
    cy.get(selectorslist.submitButton).eq(0).click()
    cy.get('body').should('contain','Successfully Updated')

  })


  it('login- fail', () => {
    cy.visit('auth/login')
    cy.get(selectorslist.userNameFild).type(userData.userFail.username)
    cy.get(selectorslist.passwordfild).type(userData.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)

  })

})
