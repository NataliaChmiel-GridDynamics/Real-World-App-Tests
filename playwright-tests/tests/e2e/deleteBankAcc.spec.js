// @ts-check
const { test, expect } = require('@playwright/test');
const { testUser, nonExistingUser } = require('../../data/users');
const { LoginPage } = require('../../pages/LoginPage');
const { MyAccountPage } = require('../../pages/MyAccountPage');
const { DeleteBankAcc } = require('../../pages/DeleteBankAcc');

test('should delete bank account', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${testUser.username}`);

  const bankName = 'Bank Name';
  const routingNumber = 123456789;
  const accountNumber = 987654321;

  //should delete bank account
  const delAcc = new DeleteBankAcc(page);

  await delAcc.bankAccLink.click();
  await expect(delAcc.bankAccList).toBeVisible();
  await delAcc.createNewAcc.click();

  await delAcc.bankName.fill(bankName);
  await delAcc.routNum.fill(`${routingNumber}`);
  await delAcc.accNum.fill(`${accountNumber}`);

  await delAcc.submitBtn.click();
  await expect(delAcc.addedAcc).toBeVisible();

  await delAcc.deleteBtn.first().click();
});
