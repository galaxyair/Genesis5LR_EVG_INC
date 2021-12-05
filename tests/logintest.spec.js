const { test, expect } = require('@playwright/test');
// const { HomePage } = require('../page/home');
// const { LoginPage } = require('../page/login');

test('test1', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.click('#login2');
  await page.fill('#loginusername', 'EVG INC');
  await page.fill('#loginpassword', 'EVG INC');

  
  page.click('#logInModal .btn.btn-primary');
  await page.click('text=Welcome EVG INC');
  await expect(page).toHaveURL('https://www.demoblaze.com/#');
});


test('test2', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.click('#signin2');
  await page.fill('#sign-username', 'EVG IND');
  await page.fill('#sign-password', 'EVG IND');
  page.click('#signInModal .btn.btn-primary');

  await page.click('#login2');
  await page.fill('#loginusername', 'EVG IND');
  await page.fill('#loginpassword', 'EVG IND');

  
  page.click('#logInModal .btn.btn-primary');
  await page.click('text=Welcome EVG IND');
  await expect(page).toHaveURL('https://www.demoblaze.com/#');
});



