// @ts-check
const { test, expect } = require('@playwright/test');
const { testUser } = require('../../data/users');
const { LoginPage } = require('../../pages/LoginPage');
const { MyAccountPage } = require('../../pages/MyAccountPage');
const { NewBankAcc } = require('../../pages/NewBankAcc');

test('should create new bank account', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${testUser.username}`);

  const bankName = 'Bank Name';
  const routingNumber = 123456789;
  const accountNumber = 987654321;

  //should create new bank account
  const newAcc = new NewBankAcc(page);

  await newAcc.bankAccLink.click();
  await expect(newAcc.bankAccList).toBeVisible();
  await newAcc.createNewAcc.click();

  await newAcc.bankName.fill(bankName);
  await newAcc.routNum.fill(`${routingNumber}`);
  await newAcc.accNum.fill(`${accountNumber}`);

  await newAcc.submitBtn.click();
  await expect(newAcc.addedAcc).toBeVisible();
});
