import { Page } from "playwright/test";

export class CartPage{
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(){
        await this.page.click('#shopping_cart_container')
    }

    async addBagToCart(){
        await this.page.click('#add-to-cart-sauce-labs-backpack')
    }

    async clickCheckoutButton(){
        await this.page.click('#checkout')
    }

    async clickContinueShoppingButton(){
        await this.page.click('#continue-shopping')
    }

    async clickRemoveFromCartButton(){
        await this.page.click('#remove-sauce-labs-backpack')
    }
}