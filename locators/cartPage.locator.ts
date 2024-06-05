import {Page, Locator} from "@playwright/test"

export default class CartPageLocators {
    readonly Qty: Locator;
    readonly Desc: Locator;
    readonly ContinueShopping: Locator;
    readonly Checkout: Locator;

    constructor (page: Page) {
        this.Qty = page.getByTestId('cart-quantity-label');
        this.Desc = page.getByTestId('cart-desc-label');
        this.ContinueShopping = page.getByTestId('continue-shopping');
        this.Checkout = page.getByRole('button', {name:'checkout'});
    }
}