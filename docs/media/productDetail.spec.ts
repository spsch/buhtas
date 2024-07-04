import {Page } from "@playwright/test";
import test, { expect } from "@playwright/test";
import productDetailPage from "../pageObjects/productDetail.page";
test('Check Product Detail - Backpack', async({page}) => {

    const productdetailpage = new productDetailPage(page);

    await productdetailpage.goToDetailPage();
    //await productdetailpage.checkProductDetailName();
    //await productdetailpage.checkProductDetailDesc();
    //await productdetailpage.checkProductDetailPrice();

})
