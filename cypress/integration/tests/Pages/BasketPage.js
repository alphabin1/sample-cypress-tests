class BasketPage{
     getYourBasketTitle(){
          return cy.get('h1');
     }

     getTotalPrice(){
          return cy.get('#price');
     }
     
     getCheckOutButton(){
          return cy.get('#checkoutButton');
     }
     
     getAddNewAddress(){
          return cy.get('[aria-label="Add a new address"]');
     }
     
     async verifyContent(yourBasket, totalPrice){
          this.getYourBasketTitle().contains(yourBasket);
          // this.getTotalPrice().contains(totalPrice);
     }
}

module.exports = new BasketPage;