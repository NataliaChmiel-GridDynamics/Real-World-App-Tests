const { expect } = require('@playwright/test');

exports.LikeCommentTrans = class LikeCommentTrans {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.transactionHistory = page.locator('[data-test="transaction-list"]');
    this.transactionSender = page.locator('[data-test="transaction-list"]').filter('li').first();
    this.transactionDetailHeader = page.locator('[data-test="transaction-detail-header"]');
    this.transactionLikeBtn = page.locator('div.MuiGrid-root button');
    this.transactionCommentBtn = page.locator('.MuiContainer-root input');
    this.transactionAddedComment = page.locator('[data-test="comments-list"]');
  }
};
