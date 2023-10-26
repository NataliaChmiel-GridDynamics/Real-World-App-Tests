const { expect } = require('@playwright/test');

exports.NavBar = class NavBar {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.homeLink = page.locator('a[data-test="sidenav-home"]');
    this.settingsLink = page.locator('a[data-test="sidenav-user-settings"]');
    this.bankAccLink = page.locator('a[data-test="sidenav-bankaccounts"]');
    this.notificationsLink = page.locator('a[data-test="sidenav-notifications"]');
    this.singOutLink = page.locator('div[data-test="sidenav-signout"]');
  }
};
