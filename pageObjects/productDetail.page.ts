import {Page, expect} from "@playwright/test";
import ProductDetailLocators from "../locators/productDetail.locator";

export default class productDetailPage {
    
    readonly page: Page;
    readonly PRODUCTNAME;
    readonly PRODUCTPRICE;
    readonly productdetaillocators: ProductDetailLocators;

    constructor (page:Page) {
        this.page = page;
        this.productdetaillocators = new ProductDetailLocators(this.page);
    }

    async goToDetailPage() {
        await this.page.goto("/inventory-item.html?id=4");
    }

    async checkProductDetailName() {
        await expect(this.productdetaillocators.productName).toContainText('Sauce Labs Backpack');
    }

    async checkProductDetailDesc() {
        await expect(this.productdetaillocators.productDesc).toContainText('uncompromising style with unequaled laptop');
    }

    async checkProductDetailPrice() {
        await expect(this.productdetaillocators.productPrice).toBe('$29.99');
    }

    async addProdToCart() {
        await this.productdetaillocators.addProductToCart.click();
    }
}