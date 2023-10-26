const { expect } = require('@playwright/test');

exports.RegisterPage = class RegisterPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator('input[name=firstName]');
    this.lastNameField = page.locator('input[name=lastName]');
    this.userNameField = page.locator('input[name=username]');
    this.passwordField = page.locator('input[name=password]');
    this.confirmPasswordField = page.locator('input[name=confirmPassword]');
    this.signupButton = page.locator('button[data-test=signup-submit]');

    //login after register
    this.signinVisible = page.locator('button[data-test="signin-submit"]');
    this.userNameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.signInButton = page.locator('[data-test=signin-submit]');
  }

  async goto() {
    await this.page.goto('/signup');
  }

  async registerUser({firstName, lastName, username, password}) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.userNameField.fill(username);
    await this.passwordField.fill(password);
    await this.confirmPasswordField.fill(password);
    await this.signupButton.click();
  }

  async registerUserLogin() {
    await this.signinVisible.isVisible();
    await this.userNameField.fill('JaneDoe12');
    await this.passwordField.fill('password');
    await this.signInButton.click();
  }

  async gotoSignin() {
    await this.page.goto('/signin');
  }
};
