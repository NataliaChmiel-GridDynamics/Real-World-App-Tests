// @ts-check
const { test, expect } = require('@playwright/test');
const { testUser } = require('../../data/users');
const { LoginPage } = require('../../pages/LoginPage');
const { MyAccountPage } = require('../../pages/MyAccountPage');
const { TransactionHistory } = require('../../pages/TransactionHistory');

test('should see transaction history', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${testUser.username}`);

  //should see transaction history
  const transHistory = new TransactionHistory(page);
  await expect(transHistory.transactionHistory).toBeVisible();
});
