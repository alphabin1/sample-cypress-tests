class AddressPaeg{

    getAddNewAddressButton(){
        return cy.get('[aria-label="Add a new address"]');
    }

    getSelectAddressButton(){
        return cy.get('#mat-radio-80');
    }

    getContinueButton(){
        return cy.get('[aria-label="Proceed to payment selection"]');
    }

    getCountryInput(){
        return cy.get('[data-placeholder="Please provide a country."]');
   }

   getNameInput(){
        return cy.get('[data-placeholder="Please provide a name."]');
   }

   getMobileNumberInput(){
        return cy.get('[data-placeholder="Please provide a mobile number."]');
   }

   getZipCodeInput(){
        return cy.get('[data-placeholder="Please provide a ZIP code."]');
   }

   getAddressTextArea(){
        return cy.get('#address');
   }

   getCityInput(){
        return cy.get('[data-placeholder="Please provide a city."]');
   }

   getStateInput(){
        return cy.get('[data-placeholder="Please provide a state."]');
   }
   
   getSubmitButton(){
        return cy.get('#submitButton');
   }

   async fillAddressForm(country, name, mobileNumber, zipCode, address, city, state){
       await this.getCountryInput().type(country);
       await this.getNameInput().type(name);
       await this.getMobileNumberInput().type(mobileNumber);
       await this.getZipCodeInput().type(zipCode);
       await this.getAddressTextArea().type(address);
       await this.getCityInput().type(city);
       await this.getStateInput().type(state);
       await this.getSubmitButton().click();
   }
}

module.exports = new AddressPaeg;