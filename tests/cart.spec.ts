import {Page } from "@playwright/test";
import test, { expect } from "@playwright/test";
import cartPage from "../pageObjects/cartPage.page";

test('Validations of Cart Page', async({page}) => {

    const cartpage = new cartPage(page);
    await cartpage.goToCart();
    await cartpage.checkQtyTag();
    await cartpage.checkDescriptionTag();
    await cartpage.checkContinueShoppingBtn();
    await cartpage.checkCheckoutBtn();
})