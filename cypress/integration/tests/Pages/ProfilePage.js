class ProfilePage{
    getUserProfileText(){
        return cy.get('h1');
    }

    getUsernameInput(){
        return cy.get('[id="username"]');
    }

    getSetUsernameButton(){
        return cy.get('[id="submit"]');
    }

    getChoosefileInput(){
        return cy.get('[id="picture"]');
    }

    getUploadPictureButton(){
        return cy.get('button[aria-label*="profile picture"]');
    }

    getProfilePicture(){
        return cy.get('img[class="img-rounded"]');
    }

    getUpdatedProfilePicture(){
        return cy.get('[alt="profile picture"]');
    }
}

module.exports = new ProfilePage