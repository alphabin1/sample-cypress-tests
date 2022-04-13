class HomePage{
    goToHomePage(){
        return cy.visit('/');
    }

    getDismissButton(){
        return cy.get('[aria-label="Close Welcome Banner"]');
    } 
   
    getCookieButton(){
        return cy.get('[aria-label="dismiss cookie message"]');
    } 
    
    getAccountButton(){
        return cy.get('[id="navbarAccount"]');
    } 
    
    getLoginButton(){
        return cy.get('[id="navbarLoginButton"]');
    } 
    
    getNotYetACustomerButton(){
        return cy.get('a[href="#/register"]');
    } 
    
    getSearchButton(){
        return cy.get('[id="searchQuery"]');
    } 
    
    getSearchbarTextInput(){
        return cy.get('[id="mat-input-0"]');
    } 
    
    getProfileButton(){
        return cy.get('button[aria-label="Go to user profile"]');
    }
}

module.exports = new HomePage