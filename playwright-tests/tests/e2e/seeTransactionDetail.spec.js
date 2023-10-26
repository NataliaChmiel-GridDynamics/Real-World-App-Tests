// @ts-check
const { test, expect } = require('@playwright/test');
const { testUser, nonExistingUser } = require('../../data/users');
const { LoginPage } = require('../../pages/LoginPage');
const { MyAccountPage } = require('../../pages/MyAccountPage');
const { TransactionDetails } = require('../../pages/TransactionDetails');

test('should see transaction details', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${testUser.username}`);

  //should see transaction details

  const transDetails = new TransactionDetails(page);
  await expect(transDetails.transactionHistory).toBeVisible();
  await expect(transDetails.transactionSender).toBeEnabled();
  await transDetails.transactionSender.click({ force: true });
  await expect(transDetails.transactionDetailHeader).toBeVisible();
});
