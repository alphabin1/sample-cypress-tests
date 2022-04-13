class DeliveryMethodPage{
    getNameText(name){
        return cy.get('div').contains(name);
    }

    getAddressText(address){
        return cy.get('div').contains(address);
    }
    
    getCountryText(country){
        return cy.get('div').contains(country);
    }

    getMobileNumber(mobileNumber){
        return cy.get('div').contains(mobileNumber);
    }

    getOneDayDeliveryButton(){
        return cy.get('.mat-accent').eq(0);
    }
    
    getFastDeliveryButton(){
        return cy.get('.mat-accent').eq(1);
    }
    
    getStandardDeliveryButton(){
        return cy.get('.mat-accent').eq(2);
    }

    getContinueButton(){
        return cy.get('[aria-label="Proceed to delivery method selection"]');
    }
}

module.exports = new DeliveryMethodPage;