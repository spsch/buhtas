import test, { expect } from "@playwright/test";
import loginPage from "../pageObjects/loginPage.page";

test('Log in with empty user - negative scenario', async({page}) => {
        
    const loginpage = new loginPage(page);
    await loginpage.visitLoginPage();
    await loginpage.loginfail();
})