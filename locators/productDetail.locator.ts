import {Page, Locator} from "@playwright/test"

export default class ProductDetailLocators {

    readonly productName: Locator;
    readonly productDesc: Locator;
    readonly productPrice: Locator;
    readonly addProductToCart: Locator;

    constructor (page: Page) {
        this.productName = page.getByTestId('inventory-item-name').first();
        this.productDesc = page.getByTestId('inventory-item-desc').first();
        this.productPrice = page.getByTestId('inventory-item-price').first();
        this.addProductToCart = page.getByTestId('add-to-cart');
    }
}

