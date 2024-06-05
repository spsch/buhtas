import {Page, expect} from "@playwright/test";
import LoginPageLocators from "../locators/loginPage.locator";
import testUsers from "../testData/testUsers.json";

export default class loginPage{
    readonly page: Page;
    readonly USERNAME;
    readonly PWD;
    readonly loginPageLocators: LoginPageLocators;

    constructor (page: Page) {
        this.page = page;
        this.loginPageLocators = new LoginPageLocators(this.page);
        this.USERNAME = testUsers[0].standard_user;
        this.PWD = testUsers[0].standard_user_pwd;
    }

    async visitLoginPage() {
        await this.page.goto('/');

    }
    
    async inputUserName() {
        console.log('Username is: ' + this.USERNAME);
        await expect(this.loginPageLocators.UserEmail).toBeVisible();
        await expect(this.loginPageLocators.UserEmail).toBeEditable();
        await expect(this.loginPageLocators.UserEmail).toBeEmpty();
        await this.loginPageLocators.UserEmail.fill(this.USERNAME);
    }
    
    async inputUserPwd() {
        console.log('Password is: ' + this.PWD);
        await expect(this.loginPageLocators.UserPassword).toBeVisible();
        await expect(this.loginPageLocators.UserPassword).toBeEditable();
        await expect(this.loginPageLocators.UserPassword).toBeEmpty();
        await this.loginPageLocators.UserPassword.fill(this.PWD);
    }

    async clickLoginBtn() {
        await expect(this.loginPageLocators.LoginButton).toBeVisible();
        await this.loginPageLocators.LoginButton.click();
    }
    
    async login() {
        await this.page.goto('/');
        await this.loginPageLocators.UserEmail.fill(this.USERNAME);
        await this.loginPageLocators.UserPassword.fill(this.PWD);
        await this.loginPageLocators.LoginButton.click();
    }

    async loginfail() {
        await this.page.goto('/');
        await this.loginPageLocators.UserEmail.fill('');
        await this.loginPageLocators.UserPassword.fill('');
        await this.loginPageLocators.LoginButton.click();
        await expect(this.loginPageLocators.LoginErrorMsg).toBeVisible();
    }

}