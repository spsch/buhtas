import test, { expect } from "@playwright/test";
import { describe } from "node:test";
import loginPage from "../pageObjects/loginPage.page";


    
    test('Log in with standard user', async({page}) => {
        
        const loginpage = new loginPage(page);
        await loginpage.visitLoginPage();
        await loginpage.inputUserName();
        await loginpage.inputUserPwd();
        await loginpage.clickLoginBtn();
        await expect(page.locator(`#item_4_title_link > div`)).toContainText("Backpack");
    })
