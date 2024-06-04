import {Page, Locator} from "@playwright/test"

export default class LoginPageLocators {
    
    readonly UserEmail: Locator;
    readonly UserPassword: Locator;
    readonly LoginButton: Locator;
    readonly LoginErrorMsg: Locator;

    constructor (page: Page){
        this.UserEmail = page.locator(`#user-name`);
        this.UserPassword = page.locator(`#password`);
        this.LoginButton = page.locator(`#login-button`);
        this.LoginErrorMsg = page.locator(`#login_button_container > div > form > div.error-message-container.error > h3`);
    }
}