class RegistrationPage{
    getNotYetACustomerButton(){
        return cy.get('a[href="#/register"]').should('be.visible');
        return cy.get('a[href="#/register"]').click();
    } 

    getRegistrationPageTitleText(){
        return cy.get('h1');
    }

    getEmailTextInput() {
        return cy.get('input#emailControl');
    }

    getPasswordTextInput() {
        return cy.get('input#passwordControl');
    }

    getRepeatPasswordTextInput() {
        return cy.get('input#repeatPasswordControl');
    }

    getSecurityDropDown() {
        return cy.get('mat-select[name="securityQuestion');
    }

    getDropDownOption() {
        return cy.get('mat-option:first-of-type');
    }

    getSecurityAnswerTextInput() {
        return cy.get('input#securityAnswerControl');
    }

    getRegisterButton() {
        return cy.get('button#registerButton');
    }

    async fillRegistrationForm(email_random, password, confirmPassword, securityAnswer){
        await this.getEmailTextInput().type(email_random);
        await this.getPasswordTextInput().type(password);
        await this.getRepeatPasswordTextInput().type(confirmPassword);
        await this.getSecurityDropDown().click();
        await this.getDropDownOption().click();
        await this.getSecurityAnswerTextInput().type(securityAnswer);
        await this.getRegisterButton().click();
    }
}

module.exports = new RegistrationPage