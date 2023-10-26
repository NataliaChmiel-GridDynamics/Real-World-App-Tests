const { expect } = require('@playwright/test');

exports.NewBankAcc = class NewBankAcc {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    //should add new bank account
    this.bankAccLink = page.locator('a[data-test="sidenav-bankaccounts"]');
    this.bankAccList = page.locator('[data-test=bankaccount-list]');
    this.createNewAcc = page.locator('[data-test=bankaccount-new]');

    this.bankName = page.locator('input[name="bankName"]');
    this.routNum = page.locator('input[name="routingNumber"]');
    this.accNum = page.locator('input[name="accountNumber"]');

    this.submitBtn = page.locator('button[data-test=bankaccount-submit]');
    this.addedAcc = page.locator('[data-test="bankaccount-list"]');
  }
};
