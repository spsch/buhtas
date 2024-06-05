import { test as setup, expect } from '@playwright/test';
import loginPage from '../pageObjects/loginPage.page';

const authFile = '.auth/authuser.json';
setup('User authentication', async ({page}) => {
    
    const loginpage = new loginPage(page);
        await loginpage.visitLoginPage();
        await loginpage.inputUserName();
        await loginpage.inputUserPwd();
        await loginpage.clickLoginBtn();

        await page.context().storageState({ path: authFile });
})


