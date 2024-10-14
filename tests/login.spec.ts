import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () =>{
    let loginPage: LoginPage;

    test.beforeEach(async({ page }) =>{
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('Successfull Login', async ({page}) =>{
        await loginPage.enterUsername('standard_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.clickButtonLogin();

        expect(page.url()).toContain('/inventory');
    })
    
    test('Empty Login', async () =>{
        await loginPage.clickButtonLogin();

        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Username is required')
    })
}) 