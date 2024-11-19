import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardpage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()




describe('login orange hmr testss', () => {

  it.only('login- fail', () => {
loginPage.accessLoginPage()
loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
loginPage.checkAcessInvalid()
  })

it.only('login-sucess', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithUser(userData.usersuccess.username, userData.usersuccess.password)
  dashboardPage.checkDashboardPage()
  

  })
})

