class SearchPage{
    getSearchedTitleText(){
        return cy.get('[id="searchValue"]');
    }

    getSearchedProductName(){
        return cy.get('[class="item-name"]');
    }
    
    getNoResultFoundText(){
        return cy.get('[class="noResultText"]');
    }

    getAddToBasketButotn(){
        return cy.get('[aria-label="Add to Basket"]');
    }
    
    getYourBasketButton(){
        return cy.get('[aria-label="Show the shopping cart"]');
    }
}

module.exports = new SearchPage