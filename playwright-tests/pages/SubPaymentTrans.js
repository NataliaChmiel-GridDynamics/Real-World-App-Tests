const { expect } = require('@playwright/test');

exports.subPaymentTrans = class subPaymentTrans {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.newTrans = page.locator('[data-test=nav-top-new-transaction]');
    this.contactClick = page.locator('span:has-text("Devon Becker")');
    this.payAmount = page.locator('input[name=amount]');
    this.payDescription = page.locator('input[name=description]');
    this.createTrans = page.locator('[data-test=transaction-create-submit-payment]');
    this.confirmTrans = page.locator('h2:has-text("Devon Becker")');
  }
};
