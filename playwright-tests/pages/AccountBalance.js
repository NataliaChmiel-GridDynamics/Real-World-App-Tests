const { expect } = require('@playwright/test');

exports.AccountBalance = class AccountBalance {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.accountBalance = page.locator('[data-test="sidenav-user-balance"]');
  }
};
