import {Page } from "@playwright/test";
import test, { expect } from "@playwright/test";

import loginPage from "../pageObjects/loginPage.page";
import productPage from "../pageObjects/productPage.page";

test('Validate product page', async({page}) => {
        
    const productpage = new productPage(page);
    await productpage.goToProductPage();
    await productpage.checkHamburgerBtn();
    await productpage.checkCartBtn();
    await productpage.checkAddToCartOption();
    await productpage.checkItemNames();
    await productpage.checkPriceTag()
})
