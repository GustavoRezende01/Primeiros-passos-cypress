class MyinfoPage {
    selectorlist() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericFild: '.oxd-input--active',
            submitButton: "[type='submit']",
            buttonSelect: '.oxd-select-text--arrow',
            selectNationality: ':nth-child(26) > span',
            maritalStatus: '.oxd-select-dropdown > :nth-child(4)',
            
        }
        return selectors

    }
    fillPersonalDetails(firstName, MidName, lastName){
    cy.get(this.selectorlist().firstNameField).clear({ force: true }).type(firstName)
    cy.get(this.selectorlist().lastNameField).click().clear().type(lastName)
    

}

fildEmployeeDetail (employeeID, otherId, driversLicenseDate ) {
    cy.get(this.selectorlist().genericFild).eq(4).click().clear().type(employeeID)
    cy.get(this.selectorlist().genericFild).eq(5).clear().type(otherId)
    cy.get(this.selectorlist().genericFild).eq(6).clear().type(driversLicenseDate)
    cy.get(this.selectorlist().genericFild).eq(7).clear({ force: true }).type('2025-07-22').click()
    cy.get(this.selectorlist().buttonSelect).eq(0).click()
    cy.get(this.selectorlist().selectNationality).click()
    cy.get(this.selectorlist().buttonSelect).eq(1).click()
    cy.get(this.selectorlist().maritalStatus).click()
}

saveforms(){
    cy.get(this.selectorlist().submitButton).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
}


}
export default MyinfoPage 