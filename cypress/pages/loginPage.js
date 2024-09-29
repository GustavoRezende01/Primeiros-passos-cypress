class LoginPage {
    selectorlist() {
        const selectors = {
            userNameFild: "[name='username']",
            passwordfild: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",

        }
        return selectors

    }

    accessLoginPage() {
        cy.visit('auth/login')

    }
    loginWithUser(username,password) {
        cy.get(this.selectorlist().userNameFild).type(username)
        cy.get(this.selectorlist().passwordfild).type(password)
        cy.get(this.selectorlist().loginButton).click()
    }

 
}
export default LoginPage