class LoginPage{
    getLoginPageTitleText(){
        return cy.get('h1');
    }

    getEmailTextInput() {
        return cy.get('input[name="email"]');
    }

    getPasswordTextInput() {
        return cy.get('input[name="password"]');
    }

    getLoginButton() {
        return cy.get('#loginButton');
    }
    
    getNotYetACustomerButton(){
        return cy.get('a[href="#/register"]');
    } 

    getErrorMessageText() {
        return cy.get('div.error');
    }

    getBackToHomeButton(){
        return cy.get('[aria-label="Back to homepage"]');
    }

    async fillLoginForm(email, password){
        await this.getEmailTextInput().type(email);
        await this.getPasswordTextInput().type(password);
        await this.getLoginButton().click();
    }
}

module.exports = new LoginPage