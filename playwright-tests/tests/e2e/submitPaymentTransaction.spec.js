// @ts-check
const { test, expect } = require('@playwright/test');
const { testUser, nonExistingUser } = require('../../data/users');
const { LoginPage } = require('../../pages/LoginPage');
const { MyAccountPage } = require('../../pages/MyAccountPage');
const { subPaymentTrans } = require('../../pages/subPaymentTrans');

test('should submit payment transaction', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${testUser.username}`);

  const payAm = `123$`;
  const payDscr = `Payment description`;

  //should submit payment transaction
  const subPay = new subPaymentTrans(page);

  await subPay.newTrans.click();
  await subPay.contactClick.click();
  await subPay.payAmount.fill(payAm);
  await subPay.payDescription.fill(payDscr);
  await subPay.createTrans.click();
  await expect(subPay.confirmTrans).toBeVisible();
});
