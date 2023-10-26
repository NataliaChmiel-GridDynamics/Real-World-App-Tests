const { expect } = require('@playwright/test');

exports.TransactionHistory = class TransactionHistory {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.transactionHistory = page.locator('[data-test="transaction-list"]');
  }
};
