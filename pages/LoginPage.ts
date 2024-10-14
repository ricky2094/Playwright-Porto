import { Page } from "playwright/test";

export class LoginPage{
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(){
        await this.page.goto('/');
    }

    async enterUsername(username : string) {
        await this.page.fill('#user-name', username);
    }

    async enterPassword(password : string) {
        await this.page.fill('#password', password);
    }

    async clickButtonLogin(){
        await this.page.click('#login-button');
    }

    async getErrorMessage(){
        return this.page.locator('//h3[@data-test="error"]').textContent();
    }

    async login(username: string, password: string){
        await this.navigate()
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.clickButtonLogin()
    }
}