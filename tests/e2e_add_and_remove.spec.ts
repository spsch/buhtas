import {Page } from "@playwright/test";
import test, { expect } from "@playwright/test";

import productPage from "../pageObjects/productPage.page";
import productDetailPage from "../pageObjects/productDetail.page";
import cartPage from "../pageObjects/cartPage.page"

test('Add and Remove product at product page', async({page}) => {
        
    const productpage = new productPage(page);
    await productpage.goToProductPage();
    await productpage.addBackpackToCart();
    await productpage.removeBackpackFromCart();
})
