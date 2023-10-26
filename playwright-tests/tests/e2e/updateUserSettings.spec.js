// @ts-check
const { test, expect } = require('@playwright/test');
const { testUser, nonExistingUser } = require('../../data/users');
const { LoginPage } = require('../../pages/LoginPage');
const { MyAccountPage } = require('../../pages/MyAccountPage');
const { AccUserSettings } = require('../../pages/AccUserSettings');
const { faker } = require('@faker-js/faker');

test('should update user settings', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${testUser.username}`);

  const phoneNumber = faker.phone.number('#########');
  const email = faker.internet.email();

  //should update user settings
  const userSet = new AccUserSettings(page);

  await userSet.settingsLink.click();
  await userSet.emailInput.fill(`${email}`);
  await userSet.phoneNumberInput.fill(`${phoneNumber}`);
  await userSet.saveBtn.click();
});
