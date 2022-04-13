class OrderSummaryPage{
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
}

module.exports = new OrderSummaryPage;