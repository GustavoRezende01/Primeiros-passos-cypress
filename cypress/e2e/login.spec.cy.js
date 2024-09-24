import userData from '../fixtures/user-data.json'

describe('orange hmr', () => {

const selectorslist = {
  userNameFild : "[name='username']" ,
  passwordfild : "[name='password']" ,
  loginButton : "[type='submit']" ,
  dashboardgrid : ".orangehrm-dashboard-grid" ,
  sectiontitleTopBar : '.oxd-topbar-header-breadcrumb-module' ,
  wrongCredentialAlert : "[role='alert']"
}


  it('login-sucess', () => {
    cy.visit('auth/login')
    cy.get(selectorslist.userNameFild).type (userData.usersuccess.username)
    cy.get(selectorslist.passwordfild).type (userData.usersuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardgrid)
  })
 

  it('login- fail', () => {
    cy.visit('auth/login')
    cy.get(selectorslist.userNameFild).type (userData.userFail.username)
    cy.get(selectorslist.passwordfild).type (userData.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)
    
  })

})
