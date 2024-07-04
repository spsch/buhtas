import {Page, expect} from "@playwright/test";
import CartPageLocators from "../locators/cartPage.locator";
import exp from "constants";

export default class cartPage {

    readonly page: Page;
    readonly cartlocators: CartPageLocators;

    constructor (page:Page) {
        this.page = page;
        this.cartlocators = new CartPageLocators(this.page);
    }

    async goToCart() {
        this.page.goto('/cart.html');
        //await expect(this.page.locator('#header_container > div.header_secondary_container > span')).toContainText('Your Cart');
        await expect(this.page.locator('[data-test="title"]')).toContainText('Your Cart');
    }

    async checkContinueShoppingBtn() {
        await expect(this.cartlocators.Checkout).toBeVisible();
    }

    async checkCheckoutBtn() {
        await expect(this.cartlocators.ContinueShopping).toBeVisible();
    }

    async checkQtyTag() {
        await expect(this.cartlocators.Qty).toContainText('QTY');
    }

    async checkDescriptionTag() {
        expect(this.cartlocators.Desc).toContainText('Description');
    }
    async proceedToCheckout() {
        await this.cartlocators.Checkout.click();
        await expect(this.page.locator('#header_container > div.header_secondary_container > span')).toContainText('Checkout');
    }
}