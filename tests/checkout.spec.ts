import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutPage } from '../pages/CheckoutPage'

test.describe('success checkout',() =>{
    let loginPage: LoginPage;
    let cartPage: CartPage;
    let checkoutPage: CheckoutPage;

    test.beforeEach(async({ page }) =>{
        loginPage = new LoginPage(page);
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('Successfull Checkout', async ({page}) =>{
        cartPage = new CartPage(page)
        checkoutPage = new CheckoutPage(page)
        await cartPage.addBagToCart()
        await cartPage.navigate()
        await cartPage.clickCheckoutButton()
        await checkoutPage.fillAllField('ricky', 'julianto', '16455')
        await checkoutPage.clickFinishButton()
        await checkoutPage.assertCheckoutSuccess()
    })
})