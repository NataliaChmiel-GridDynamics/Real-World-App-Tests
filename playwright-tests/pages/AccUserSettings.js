const { expect } = require('@playwright/test');

exports.AccUserSettings = class AccUserSettings {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.settingsLink = page.locator('a[data-test="sidenav-user-settings"]');
    this.emailInput = page.locator('input[data-test="user-settings-email-input"]');
    this.phoneNumberInput = page.locator('input[data-test="user-settings-phoneNumber-input"]');
    this.saveBtn = page.locator('span:has-text("Save")');
  }
};
