import { expect, Page } from "playwright/test";

export class CheckoutPage{
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillFirstName(firstname : string){
        await this.page.fill('#first-name', firstname)
    }

    async fillLastName(lastname : string){
        await this.page.fill('#last-name', lastname)
    }

    async fillPostalCode(postalcode : string){
        await this.page.fill('#postal-code', postalcode)
    }

    async clickCancelButton(){
        await this.page.click('#cancel')
    }

    async clickContinueButton(){
        await this.page.click('#continue')
    }

    async clickFinishButton(){
        await this.page.click('#finish')
    }

    async assertCheckoutSuccess(){
        await expect(this.page.locator('#checkout_complete_container')).toBeVisible()
    }

    async fillAllField(firstname : string, lastname : string, postalcode : string ){
        await this.fillFirstName(firstname)
        await this.fillLastName(lastname)
        await this.fillPostalCode(postalcode)
        await this.clickContinueButton()
    }
}