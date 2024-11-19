import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardpage.js'
import MenuPage from '../pages/menuPage.js'
import MyinfoPage from '../pages/myinfopage.js'

const Chance = require('chance');

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage () 
const Myinfopage = new MyinfoPage()
const chance = new Chance();




describe('orange hmr', () => {

  const selectorslist = {

  }

  it.only('user info update-sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.usersuccess.username, userData.usersuccess.password)
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()


    Myinfopage.fillPersonalDetails(chance.first() , chance.last() , chance.name())
    Myinfopage.fillPersonalDetails('employId', 'otherId', '2015-07-25' , '123456' ,)
    Myinfopage.saveforms()


})
  })


