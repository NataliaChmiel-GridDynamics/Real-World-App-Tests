// @ts-check
const { test, expect } = require('@playwright/test');
const { testUser } = require('../../data/users');
const { LoginPage } = require('../../pages/LoginPage');
const { MyAccountPage } = require('../../pages/MyAccountPage');
const { NavBar } = require('../../pages/NavBar');

test('should display acc details', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${testUser.username}`);

  const navBar = new NavBar(page);
  await expect(navBar.homeLink).toBeVisible();
  await expect(navBar.settingsLink).toBeVisible();
  await expect(navBar.bankAccLink).toBeVisible();
  await expect(navBar.notificationsLink).toBeVisible();
  await expect(navBar.singOutLink).toBeVisible();
});
