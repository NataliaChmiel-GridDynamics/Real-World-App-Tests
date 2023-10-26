// @ts-check
const { test, expect } = require('@playwright/test');
const { testUser, nonExistingUser } = require('../../data/users');
const { LoginPage } = require('../../pages/LoginPage');
const { MyAccountPage } = require('../../pages/MyAccountPage');
const { ReqPaymentTrans } = require('../../pages/ReqPaymentTrans');

test('should submit payment transaction', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${testUser.username}`);

  const payAm = `123$`;
  const payDscr = `Payment description`;

  //should submit payment transaction
  const reqPay = new ReqPaymentTrans(page);

  await reqPay.newTrans.click();
  await reqPay.contactClick.click();
  await reqPay.payAmount.fill(payAm);
  await reqPay.payDescription.fill(payDscr);
  await reqPay.reqTrans.click();
  await expect(reqPay.confirmTrans).toBeVisible();
});
