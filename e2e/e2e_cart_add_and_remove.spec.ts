import {Page } from "@playwright/test";
import test, { expect } from "@playwright/test";

import productPage from "../../pageObjects/productPage.page";
import productDetailPage from "../../pageObjects/productDetail.page";
import cartPage from "../../pageObjects/cartPage.page"

test('Go to product detail and add to cart', async({page}) => {

    const productpage =new productPage(page);
    const productdetailpage = new productDetailPage(page);
    const cartpage = new cartPage(page);
    
    await productpage.goToProductPage();
    await productpage.clickOnBackpack();
    await productdetailpage.goToDetailPage();
    await productdetailpage.addProdToCart();
    await cartpage.goToCart();
    await cartpage.proceedToCheckout();

})
