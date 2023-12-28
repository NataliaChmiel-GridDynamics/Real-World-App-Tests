// @ts-check
const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../../pages/RegisterPage');
const { MyAccountPage } = require('../../pages/MyAccountPage');
const { LoginPage } = require('../../pages/LoginPage');
import { faker } from '@faker-js/faker';
const { WelcomePopUp } = require('../../pages/WelcomePopUp');

test('should register new account', async ({ page }) => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const username = faker.internet.userName();
  const password = faker.internet.password();

  const bankName = 'Bank Name';
  const routingNumber = 123456789;
  const accountNumber = 987654321;

  const registerPage = new RegisterPage(page);
  await registerPage.goto();
  await registerPage.registerUser({ firstName, lastName, username, password });

  const loginPage = new LoginPage(page);
  await loginPage.userLogin(username, password);

  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${username}`);

  const welcomePopUp = new WelcomePopUp(page);
  await welcomePopUp.skipHelloMessage();
  await welcomePopUp.createBankAccount({ bankName, routingNumber, accountNumber });
  await welcomePopUp.skipFinishMessage();
});
