const { expect } = require('@playwright/test');

exports.TransactionDetails = class TransactionDetails {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.transactionHistory = page.locator('[data-test="transaction-list"]');
    this.transactionSender = page.locator('[data-test="transaction-list"]')
    .filter('li')
    .first();
    this.transactionDetailHeader = page.locator('[data-test="transaction-detail-header"]');
  }
};
