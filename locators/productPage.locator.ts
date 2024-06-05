import {Page, Locator} from "@playwright/test"

export default class ProductPageLocators {

    readonly HamburgerBtn: Locator;
    readonly CartBtn: Locator;
    readonly PriceTag: Locator;
    readonly AddToCartBackpackBtn: Locator;
    readonly AddToCartBoltshirtBtn: Locator;
    readonly InventoryNameBackpack: Locator;
    readonly InventoryNameTshirt: Locator;
    readonly RemoveFromCart: Locator;

    constructor (page: Page) {
        this.HamburgerBtn = page.locator(`#react-burger-menu-btn`);
        this.CartBtn = page.getByTestId('shopping-cart-link');
        this.PriceTag = page.getByTestId('inventory-item-price').first();
        this.AddToCartBackpackBtn = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.AddToCartBoltshirtBtn = page.getByTestId('add-to-cart-sauce-labs-bolt-t-shirt');
        this.InventoryNameBackpack = page.locator('#item_4_title_link > div');
        this.InventoryNameTshirt = page.locator('#item_1_title_link > div');
        this.RemoveFromCart = page.getByTestId('remove-sauce-labs-backpack').first();

    }

}