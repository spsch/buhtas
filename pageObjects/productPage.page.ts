import {Page, expect} from "@playwright/test";
import ProductPageLocators from "../locators/productPage.locator";
import testproducts from "../testData/products.json"

export default class productPage {
    readonly page: Page;
    readonly BACKPACK;
    readonly TSHIRT;
    readonly productpagelocators: ProductPageLocators;

    constructor (page:Page) {
        this.page = page;
        this.productpagelocators = new ProductPageLocators(this.page);
        this.BACKPACK = testproducts[0].backpack;
        this.TSHIRT = testproducts[0].tshirt;
    }

    async goToProductPage() {
        await this.page.goto("/inventory.html");
    }

    async checkHamburgerBtn() {
        await expect(this.productpagelocators.HamburgerBtn).toBeVisible();
    }

    async checkCartBtn() {
        await expect(this.productpagelocators.CartBtn).toBeVisible();
    }

    async checkPriceTag() {
        await expect(this.productpagelocators.PriceTag).toBeVisible();
    }

    async checkAddToCartOption() {
        await expect(this.productpagelocators.AddToCartBackpackBtn).toContainText('Add to cart');
    }

    async checkItemNames() {
        await expect(this.productpagelocators.InventoryNameBackpack).toContainText(this.BACKPACK);
        await expect(this.productpagelocators.InventoryNameTshirt).toContainText(this.TSHIRT);
    }

}