class PaymentOptionPage{

    getAddNewCardButton(){
        return cy.get('mat-panel-title').contains(' Add new card')
    }

    getNameInput(){
        return cy.get('#mat-input-10');
    }

    getCardNumberInput(){
        return cy.get('#mat-input-11');
    }

    getExpiryDate(){
        return cy.get('select').eq(0);
    }

    getExpiryYear(){
        return cy.get('#mat-input-13[value="2080"]');
    }

    getSubmitButton(){
        return cy.get('[aria-label="Proceed to review"]');
    }

    getSelectCardPayment(){
        return cy.get('mat-cell').eq(0);
    }

    async fillCreditCardForm(name, cardNumber){
        await this.getNameInput().type(name);
        await this.getCardNumberInput().type(cardNumber);
        await this.getExpiryDate().select('value="1"');
        await this.getExpiryYear().click();
        await this.getSubmitButton().click();
    }
}

module.exports = new PaymentOptionPage;