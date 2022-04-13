/// <reference types='cypress'/>

const homePage = require('../Pages/HomePage');
const loginPage = require('../Pages/LoginPage');
const registrationPage = require('../Pages/RegistrationPage');
const searchPage = require('../Pages/SearchPage');
const profilePage = require('../Pages/ProfilePage');
const basketPage = require('../Pages/BasketPage');
const addressPage = require('../Pages/AddressPage');
const deliveryMethodPage = require('../Pages/DeliveryMethodPage');
const paymentOptionPage = require('../Pages/PaymentOptionPage');
const orderSummaryPage = require('../Pages/OrderSummaryPage');
const testdata = require('../TestData/testdata.json');

const userName = testdata.userName;
const userProfileText = testdata.userProfileText
const email = testdata.email;
const password = testdata.password;
const confirmPassword = testdata.confirmPassword;
const securityAnswer = testdata.securityAnswer;
const randomNumber = Math.floor(Math.random() * 1000);
const email_random = `test${randomNumber}@test.com`;
const validProductName = testdata.validProductName;
const invalidProductName = testdata.invalidProductName;
const noResultFoundText = testdata.noResultFoundText;
const yourBasketTitle = testdata.yourBasketTitle;
const totalPrice = testdata.totalPrice;
const country = testdata.country;
const name = testdata.userName;
const mobileNumber = testdata.mobileNumber;
const zipCode = testdata.zipCode;
const address = testdata.address;
const city = testdata.city;
const state = testdata.state;
const cardNumber = testdata.cardNumber;
const filepath = 'images/profile.jpeg';

describe('Juice Shop Tests:', ()=>{
    it('Verify user should able to signup', async ()=>{
        // Goto Url then Login Page
        await homePage.goToHomePage();
        await homePage.getDismissButton().click();
        await homePage.getCookieButton().click();
        await homePage.getAccountButton().click();
        await homePage.getLoginButton().click();

        // Login Page
        cy.assertUrl('/login')
        await loginPage.getLoginPageTitleText().should('be.visible');
        await loginPage.getLoginPageTitleText().contains("Login");
        await loginPage.getNotYetACustomerButton().click();
        
        // Registration Page
        cy.url().should('include', '/register');
        cy.assertUrl('/register')
        await registrationPage.getRegistrationPageTitleText().should('be.visible');
        await registrationPage.getRegistrationPageTitleText().contains("User Registration");

        // Fill Resigtraion Form
        await registrationPage.fillRegistrationForm(email_random, password, confirmPassword, securityAnswer);

        // Fill Login Form
        cy.url().should('include', '/login');
        await loginPage.fillLoginForm(email, password);
    });
    
    it('Verify valid user should able to login', async ()=>{
        // Goto Url then Login Page
        await homePage.goToHomePage();
        await homePage.getDismissButton().click();
        await homePage.getCookieButton().click();
        await homePage.getAccountButton().click();
        await homePage.getLoginButton().click();

        // Fill Login Form with valid credentials
        cy.url().should('include', '/login');
        await loginPage.fillLoginForm(email, password)
    });
    
    it('Verify invalid user should not able to login', async ()=>{
        // Goto Url then Login Page
        await homePage.goToHomePage();
        await homePage.getDismissButton().click();
        await homePage.getCookieButton().click();
        await homePage.getAccountButton().click();
        await homePage.getLoginButton().click();

        // Fill Login Form with invalid creadentials
        cy.url().should('include', '/login');
        await loginPage.fillLoginForm(email_random, password)
        await loginPage.getErrorMessageText().contains("Invalid email or password.");
    });

    it('Valid user should be able to update own profile details', async ()=>{
        // Goto Url then Login Page
        await homePage.goToHomePage();
        await homePage.getDismissButton().click();
        await homePage.getCookieButton().click();
        await homePage.getAccountButton().click();
        await homePage.getLoginButton().click();

        // Fill Login Form
        cy.url().should('include', '/login');
        await loginPage.fillLoginForm(email, password)
        
        // Goto Profile Page and Update profile
        await homePage.getAccountButton().click();
        await homePage.getProfileButton().click();
        await profilePage.getUserProfileText().contains(userProfileText);

        // Add UserName
        await profilePage.getUsernameInput().type(userName);
        await profilePage.getSetUsernameButton().click();

        // Choose File
        await profilePage.getChoosefileInput().attachFile(filepath);
        await profilePage.getUploadPictureButton().click();
        // await profilePage.getProfilePicture().invoke('attr', 'src').should('eq', 'assets/public/images/uploads/21.jpg');
    });

    it('Verify valid user should able purchase the product', async ()=>{
        // Goto Url then Login Page
        await homePage.goToHomePage();
        await cy.wait(5000)
        await homePage.getDismissButton().click();
        await homePage.getCookieButton().click();
        await homePage.getAccountButton().click();
        await homePage.getLoginButton().click();

        // Fill Login Form with valid credentials
        cy.url().should('include', '/login');
        await loginPage.fillLoginForm(email, password)

        // Search Product
        await homePage.getSearchButton().click();
        await homePage.getSearchbarTextInput().type(validProductName).type('{enter}');
        await searchPage.getSearchedTitleText().contains(validProductName);
        await searchPage.getSearchedProductName().contains(validProductName);
        await searchPage.getAddToBasketButotn().click();
        await searchPage.getYourBasketButton().click();

        // Your Basket
        await basketPage.verifyContent(yourBasketTitle, totalPrice)
        await basketPage.getCheckOutButton().click()
        
        // Fill Address form
        await addressPage.getAddNewAddressButton().click();
        await addressPage.fillAddressForm(country, name, mobileNumber, zipCode, address, city, state);
        await addressPage.getSelectAddressButton().click();
        await cy.wait(500);
        await addressPage.getContinueButton().click({force:true});

        // Delivery Method
        await deliveryMethodPage.getNameText(name);
        await deliveryMethodPage.getAddressText(address);
        await deliveryMethodPage.getCountryText(country);
        await deliveryMethodPage.getMobileNumber(mobileNumber);
        await deliveryMethodPage.getOneDayDeliveryButton().click();
        await deliveryMethodPage.getContinueButton().click();

        // Payment Options
        await cy.url().should('include', '/shop');
        await paymentOptionPage.getAddNewCardButton().click();
        // await paymentOptionPage.fillCreditCardForm(name, cardNumber);
        await paymentOptionPage.getSelectCardPayment().click();
        await paymentOptionPage.getSubmitButton().click();

        // Order Summary
        await cy.url().should('include', '//order-summary');
        await orderSummaryPage.getNameText(name);
        await orderSummaryPage.getAddressText(address);
        await orderSummaryPage.getCountryText(country);
        await orderSummaryPage.getMobileNumber(mobileNumber);
    });
    
    it('Verify user should able to search valid product', async ()=>{
        // Goto Url and Search Product
        await homePage.goToHomePage();
        await homePage.getDismissButton().click();
        await homePage.getCookieButton().click();
        
        // Search Product
        await homePage.getSearchButton().click();
        await homePage.getSearchbarTextInput().type(validProductName).type('{enter}');
        await searchPage.getSearchedTitleText().contains(validProductName);
        await searchPage.getSearchedProductName().contains(validProductName);
    });
    
    it('Verify user should able to search Invalid product', async ()=>{
        // Goto Url and Search Product
        await homePage.goToHomePage();
        await homePage.getDismissButton().click();
        await homePage.getCookieButton().click();

        // Search Random Product Item and check No result found message
        await homePage.getSearchButton().click();
        await homePage.getSearchbarTextInput().type(invalidProductName).type('{enter}');
        await searchPage.getNoResultFoundText().contains(noResultFoundText);
    });
});