const { expect } = require('@playwright/test');

exports.WelcomePopUp = class WelcomePopUp {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.nextButton = page.locator('[data-test="user-onboarding-next"]');
  }

  async skipHelloMessage() {
    await expect(this.nextButton).toBeVisible();
    await expect(this.nextButton).toBeEnabled();
    await this.nextButton.click();
  }

  async createBankAccount({ bankName, routingNumber, accountNumber }) {
    await this.page.locator('input[name="bankName"]').fill(bankName);
    await this.page.locator('input[name="routingNumber"]').fill(`${routingNumber}`);
    await this.page.locator('input[name="accountNumber"]').fill(`${accountNumber}`);
    await this.page.locator('button[data-test="bankaccount-submit"]').click();
  }

  async skipFinishMessage() {
    await this.page.locator('button[data-test="user-onboarding-next"]').click();
  }
};
